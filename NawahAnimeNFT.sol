// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NawahAnimeNFT is ERC721, ERC2981, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 public maxSupply;
    uint256 public priceWei;
    uint256 public maxPerWallet;
    string private baseTokenURI;
    bool public mintOpen = false;
    mapping(address => uint256) public mintedPerWallet;
    IERC20 public nwtkToken;
    uint256 public priceNWTK;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxSupply_,
        uint256 priceWei_,
        uint256 maxPerWallet_,
        address royaltyReceiver_,
        uint96 royaltyFraction_
    ) ERC721(name_, symbol_) {
        maxSupply = maxSupply_;
        priceWei = priceWei_;
        maxPerWallet = maxPerWallet_;
        _setDefaultRoyalty(royaltyReceiver_, royaltyFraction_);
    }

    function setBaseURI(string calldata uri) external onlyOwner {
        baseTokenURI = uri;
    }

    function setMintOpen(bool open) external onlyOwner {
        mintOpen = open;
    }

    function setPriceWei(uint256 p) external onlyOwner {
        priceWei = p;
    }

    function setNWTKToken(address tokenAddr, uint256 priceInNWTK) external onlyOwner {
        nwtkToken = IERC20(tokenAddr);
        priceNWTK = priceInNWTK;
    }

    function setMaxPerWallet(uint256 m) external onlyOwner {
        maxPerWallet = m;
    }

    function mint(uint256 amount) external payable nonReentrant {
        require(mintOpen, "Minting is closed");
        require(amount > 0, "Amount 0");
        require(_tokenIdCounter.current() + amount <= maxSupply, "Exceeds max supply");
        require(mintedPerWallet[msg.sender] + amount <= maxPerWallet, "Wallet limit");
        require(msg.value >= priceWei * amount, "Insufficient payment");

        mintedPerWallet[msg.sender] += amount;
        for (uint256 i; i < amount; ++i) {
            _tokenIdCounter.increment();
            _safeMint(msg.sender, _tokenIdCounter.current());
        }
    }

    function mintWithNWTK(uint256 amount) external nonReentrant {
        require(mintOpen, "Minting is closed");
        require(address(nwtkToken) != address(0), "NWTK not configured");
        require(amount > 0, "Amount 0");
        require(_tokenIdCounter.current() + amount <= maxSupply, "Exceeds max supply");
        require(mintedPerWallet[msg.sender] + amount <= maxPerWallet, "Wallet limit");

        uint256 totalPrice = priceNWTK * amount;
        require(nwtkToken.transferFrom(msg.sender, address(this), totalPrice), "NWTK transfer failed");

        mintedPerWallet[msg.sender] += amount;
        for (uint256 i; i < amount; ++i) {
            _tokenIdCounter.increment();
            _safeMint(msg.sender, _tokenIdCounter.current());
        }
    }

    function ownerMint(address to, uint256 amount) external onlyOwner {
        require(_tokenIdCounter.current() + amount <= maxSupply, "Exceeds max supply");
        for (uint256 i; i < amount; ++i) {
            _tokenIdCounter.increment();
            _safeMint(to, _tokenIdCounter.current());
        }
    }

    function withdraw(address payable to) external onlyOwner {
        uint256 bal = address(this).balance;
        if (bal > 0) {
            to.transfer(bal);
        }
        if (address(nwtkToken) != address(0)) {
            uint256 tokenBal = nwtkToken.balanceOf(address(this));
            if (tokenBal > 0) {
                nwtkToken.transfer(to, tokenBal);
            }
        }
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
