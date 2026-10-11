<div align="center">

# 🐧 Ubuntu 24.04 LTS Dual Boot Visual Guide
### A complete, step-by-step visual guide for Windows 11 laptops

[![Live Web](https://img.shields.io/badge/Live_Site-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://minilux0.github.io/ubuntu-dualboot-guide/)
[![Download PDF](https://img.shields.io/badge/Download_PDF-21_MB-dc2626?style=for-the-badge&logo=adobeacrobatreader)](https://minilux0.github.io/ubuntu-dualboot-guide/ubuntu_dualboot_guide.pdf)
[![Spanish Version](https://img.shields.io/badge/Versi%C3%B3n-Espa%C3%B1ol-38bdf8?style=for-the-badge)](https://minilux0.github.io/ubuntu-dualboot-guide/es.html)
[![Screenshots](https://img.shields.io/badge/Screenshots-33_Annotated_Photos-orange?style=for-the-badge&logo=googlephotos)](./imagenes_guia/)
[![Dedicated to](https://img.shields.io/badge/Dedicated_With_Love_To-%E9%92%B1%E5%A5%95%E5%BD%A4-f43f5e?style=for-the-badge)](https://minilux0.github.io/ubuntu-dualboot-guide/)

<br>

<p align="center">
  <a href="https://minilux0.github.io/ubuntu-dualboot-guide/">
    <img src="./imagenes_guia/30_instalador_junto_windows.jpg" alt="Ubuntu Alongside Windows" width="680" style="border-radius:12px;"/>
  </a>
</p>

### 🚀 [Open Interactive Web Guide (English)](https://minilux0.github.io/ubuntu-dualboot-guide/) &bull; [Versión en Español](https://minilux0.github.io/ubuntu-dualboot-guide/es.html)

</div>

---

### 📖 About This Guide

This visual guide was crafted with all love for **钱奕彤** to install **Ubuntu 24.04 LTS Noble Numbat** alongside **Windows 11** on modern laptops (such as Huawei MateBook and Lenovo IdeaPad) completely risk-free, without losing any personal files or Windows installations.

Every single screen, BIOS menu, and installer dialog was photographed, tested, and color-coded step-by-step.

---

### 🌟 Key Highlights

| Feature | Description |
| :--- | :--- |
| 🛡️ **Zero Data Loss** | Keeps Windows 11 and all your personal files 100% intact (*Install alongside Windows*). |
| 🚫 **Rufus Trap Solved** | Explains why Rufus caused boot loops and how **balenaEtcher** solves it via bit-by-bit cloning. |
| 🔑 **BitLocker Safe** | Step-by-step methods to verify and disable Windows Device Encryption before resizing partitions. |
| 💻 **BIOS / UEFI Ready** | Clear instructions for both Huawei MateBook (InsydeH2O) and Lenovo BIOS screens. |
| 📸 **33 Real Photos** | Authentic, annotated photos with color-coded callouts for every step, including GNU GRUB. |

---

### 🗺️ Installation Roadmap (13 Phases)

1. **🧹 Phase 1: USB Deep Clean** &mdash; Restoring pendrive partition table using Windows `diskpart`.
2. **📥 Phase 2: Official ISO** &mdash; Downloading genuine Ubuntu 24.04 LTS (Noble Numbat).
3. **⚡ Phase 3: Flashing** &mdash; Writing raw bootable image with `balenaEtcher`.
4. **⚠️ Phase 4: Format Alert** &mdash; Safely closing Windows fake drive format warnings.
5. **🛡️ Phase 5: Device Encryption** &mdash; Disabling BitLocker to allow partition resizing.
6. **⚙️ Phase 6: BIOS / UEFI** &mdash; Disabling *Secure Boot* & setting USB boot priority.
7. **🚀 Phase 7: F12 Boot Menu** &mdash; Booting into *Try or Install Ubuntu*.
8. **🌐 Phase 8: Welcome & Wi-Fi** &mdash; Setting language and connecting to network.
9. **📦 Phase 9: Apps Selection** &mdash; Choosing Default installation & proprietary drivers.
10. **⚖️ Phase 10: Partitioning** &mdash; Selecting **`Install alongside Windows Boot Manager`**.
11. **👤 Phase 11: User Profile** &mdash; Setting username (`yitong`) and admin password.
12. **🕒 Phase 12: Timezone & Summary** &mdash; Final checks before disk write.
13. **🎉 Phase 13: Reboot & GRUB** &mdash; Verifying Dual Boot choice at startup.

---

### 📂 Full Reading Options

* 🌐 **Web App (Recommended):** [https://minilux0.github.io/ubuntu-dualboot-guide/](https://minilux0.github.io/ubuntu-dualboot-guide/)
* 🇪🇸 **Web App (Español):** [https://minilux0.github.io/ubuntu-dualboot-guide/es.html](https://minilux0.github.io/ubuntu-dualboot-guide/es.html)
* 📥 **PDF Guide (Offline):** [Download ubuntu_dualboot_guide.pdf (21 MB)](https://minilux0.github.io/ubuntu-dualboot-guide/ubuntu_dualboot_guide.pdf)
* 📄 **Markdown Source (EN):** [guia_recuperacion_y_booteo_ubuntu.md](./guia_recuperacion_y_booteo_ubuntu.md)
* 📄 **Markdown Source (ES):** [guia_recuperacion_y_booteo_ubuntu_es.md](./guia_recuperacion_y_booteo_ubuntu_es.md)

---

<div align="center">

Made with all love for **钱奕彤** 💕<br>
Ubuntu 24.04 LTS Dual Boot Visual Guide

</div>
