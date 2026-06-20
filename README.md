# 📡 Whonmywifi

Whonmywifi is an open-source, high-fidelity web utility paired with a lightweight browser companion extension designed to evaluate public Wi-Fi security vulnerabilities before a user transmits sensitive data. 

By leveraging **Web Crypto API timing diagnostics**, **Serverless Network edge telemetry**, and a **Browser Extension Sandbox bridge**, this application flags suspicious routing proxy anomalies and signs of active Man-in-the-Middle (MitM) positioning.

---

## 🚀 Key Architectural Features

* **Extension Interstitial Gate:** Intercepts first-time web visitors with a premium dashboard overlay, prompting them to link the extension core for maximum system telemetry.
* **Web Crypto API Benchmarking:** Executes client-side ephemeral cryptographic handshakes ($AES-256-GCM$) to detect micro-latency shifts caused by active DOM runtime hooking or script inspectors.
* **Serverless Edge Telemetry:** Evaluates incoming request headers (`Via`, `Forwarded`) and verifies the autonomous system network provider (ISP vs Enterprise Datacenter) concurrently in under 100ms.
* **Glassmorphic Interface:** A high-end dark-mode user interface built with Tailwind CSS mimicking professional cybersecurity terminal displays.

---

## 🛠️ Installation & Local Development

### 1. Cloning the Repository
```bash
git clone https://github.com/YOUR_USERNAME/whonmywifi.git
cd whonmywifi
```