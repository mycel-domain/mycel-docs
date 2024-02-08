---
sidebar_position: 2
---

# Mycel ID

Mycel ID is at the heart of the Mycel infrastructure, serving as a unique digital identifier in the Web3 world.
It enables users to register and manage their Web3 identities effortlessly, merging the convenience of Web2 identity systems with the security and decentralization of Web3.
Mycel ID supports various authentication methods, including biometric (fingerprint) and traditional methods (Google, Email, etc.), ensuring that users have a smooth transition to and interaction within the Web3 space. With its integration of off-chain and on-chain elements and native DNS support, Mycel ID lays the foundation for a decentralized, yet user-friendly platform that harmonizes the best aspects of Web2 and Web3 technologies.

![multiwallet](../../../assets/multiwallet.png)

### Customizable Domains

![tokenomics](../../../assets/tokenomics.png)
Mycel offers a tiered domain registration system including Top-Level Domains (TLDs), Second-Level Domains (SLDs).
This system is attractive to organizations with communities seeking more flexible and customizable naming services.
[See more](./domain-registration)

### Interoperability

![interoperability](../../../assets/interchain.png)
Mycel supports communicate with other blockchain network like:

- Ethereum and other EVM compatible chains
- IBC Supported chains

It possible to register and resolve domains, and update records from various blockchain network.

And this enables seamless integration with various name services:

- Ethereum Name Service (ENS)
- Inter-Chain Name Service (ICNS)  
  ...

This integration can increase utility for users who have existing domains on those services or want to access features provided by them

Also, Mycel supports almost of all chain's wallet addresses.
It is possible to resolve multiple addresses for each chain, such as contract wallets, with a single name.

### Multiple Protocols Support

![multiple-prortocols](../../../assets/protocols.png)
Mycel caters to different user needs by supporting various protocols and a range of record types.
Supported record types:

- Domain Name System (DNS) records
- Wallet addresses
- IPFS addresses
- Metadata records, which can store any custom data

And, you can resolve domains via the following protocols:

- Domain Name Service (DNS)
- Inter‑Blockchain Communication Protocol (IBC)
- Name Service Contract(EVM)
- RPC

You will be able to manage complex addresses with one domain.
This means that it is possible to track multiple chains of activity under one domain.
[See more](./name-resolution)

## Domain Registration

![domain](../../../assets/domain_top.png)

Domain registration is a crucial aspect of the Mycel project.
It provides users with the ability to secure unique domain names that can be used to represent their websites, services, or digital assets on the decentralized web. The Mycel domain registration process consists of two levels: Top-Level Domains (TLDs) and Second-Level Domains (SLDs). Here, we will delve into the details of each level and the registration process.

### Domains

**Top-Level Domains (TLDs)**

TLDs are the highest level in the domain name hierarchy, such as .com, .org, or .net. In Mycel, validators are responsible for registering TLDs.
The process of issuing a TLD within the Mycel system involves several key steps:

1. The TLD applicant must pay a registration fee in tokens (such as USDC) equivalent to the desired number of accounts per year multiplied by a specific rate.
2. Locking of Registration Fee: The paid registration fee is then locked within the Mycel system.
3. Mycel calculates the amount of MYCEL tokens to burn based on the locked registration fee and a specific rate. The tokens are then burnt, effectively removing them from circulation.
4. Upon successful completion of the above steps, Mycel issues the TLD to the applicant.

**Second-Level Domains (SLDs)**

SLDs are the domain names that users typically register and use for their projects, such as example.com or myproject.org. In the context of Mycel, the primary SLD is .cel (e.g., myproject.cel). Users can register SLDs under the .cel TLD to represent their projects or assets in the decentralized ecosystem.

The registration fee for SLDs depends on the number of characters in the domain name.
This variable pricing structure incentivizes users to select shorter domain names, which are generally more memorable and valuable.

### Domain Registration Process

To register a domain in Mycel, users must follow these steps:

1. Choose a unique SLD that is not already registered. The SLD should be concise, memorable, and representative of the user's project or asset.
2. Calculate the registration fee based on the number of characters in the chosen SLD.
3. Connect a supported wallet (e.g., Kepler or MetaMask) with sufficient funds to cover the registration fee.
4. Submit a domain registration request through the Mycel platform. The request will be processed, and if successful, the domain will be registered to the user's wallet address.
5. Optionally, users can create subdomains for their registered SLDs free of charge.

By providing a decentralized domain registration system with a user-friendly process, Mycel enables users to secure unique domain names for their projects and assets in the decentralized web.