# 🐧 Guía Visual y Definitiva: Instalación de Ubuntu con balenaEtcher en tu Laptop con Windows (Dual Boot Seguro)

> **💖 Para mi novia hermosa:** Preparé esta guía paso a paso especialmente para ti con mucho cariño, pensada para que puedas instalar **Ubuntu** en tu laptop con **Windows** sin ningún dolor de cabeza, dejando atrás los errores y la frustración que tuviste con Rufus. Aquí aprenderás a recuperar tu memoria USB, grabarla de forma infalible con **balenaEtcher**, configurar el arranque en tu BIOS y convivir con ambos sistemas (**Dual Boot**) con absoluta seguridad para todos tus archivos.

---

## 💡 What Exactly Are We Doing? It's Called DUAL BOOT (Dualboot) / ¿Qué es exactamente lo que vamos a hacer?

Lo que vamos a configurar en tu laptop se llama técnicamente un **Dual Boot** (o *Dualboot* / arranque dual):

* **Dos sistemas operativos en una sola laptop:** Esto significa que tu **Windows** actual y tu nuevo **Ubuntu** convivirán pacíficamente lado a lado en el disco duro o SSD de tu equipo.
* **Windows NO se va a borrar:** No perderás ninguno de tus programas, tareas de la universidad, fotos ni archivos personales. Ambos sistemas quedan como vecinos independientes en particiones separadas.
* **Tú eliges adónde entrar cada vez que enciendes la computadora:** Cada vez que pulses el botón de encendido, aparecerá una pantalla de inicio limpia (el menú GNU GRUB) que te dará la total libertad de elegir:
  - 💼 **Windows:** Para tus clases habituales, programas cotidianos y tu entorno de siempre.
  - 🐧 **Ubuntu:** Para programar, explorar Linux, practicar comandos de terminal y desarrollo de software.

---

## 🛑 Step 0 Mandatory Precaution / Paso 0 Precaución Obligatoria: ¡No olvides respaldar tus archivos!

> [!CAUTION]
> ### 📁 La Regla de Oro N° 1 de la Informática:
> Aunque este proceso de Dual Boot es totalmente seguro y está pensado específicamente para mantener tu instalación de Windows intacta, **la regla de oro siempre que se modifican particiones de disco es hacer una copia de seguridad (backup) de tus archivos importantes**:
> 
> * **Qué respaldar:** Tus trabajos universitarios, tesis o proyectos, fotos familiares, videos y cualquier documento insustituible.
> * **Dónde guardarlos:** Súbelos a la nube (**Google Drive, OneDrive o Dropbox**) o cópialos en un disco duro externo o memoria USB (diferente a la memoria que usaremos para instalar Ubuntu).
> 
> *Tomarte 5 minutos para respaldar tus archivos te dará el 100% de tranquilidad durante toda la instalación.*

---

## 📌 Nota Importante sobre las Fotos de esta Guía: ¡Lee esto primero!

> [!NOTE]
> ### 💡 La diferencia de laptops y pantallas entre nosotros dos:
> Para documentar cada segundo del proceso con capturas de pantalla 100% reales y guiarte con total seguridad, **yo realicé toda la instalación de prueba en mi laptop personal (una Lenovo donde ya tengo Kali Linux)**.
> 
> En cambio, **tú vas a realizar la instalación en tu laptop Huawei (donde tienes Windows)**.
> 
> Por esa razón:
> 1. En mis fotos verás el logo de **Lenovo** o la opción que menciona *"Kali Linux"*.
> 2. En tu pantalla verás el logo de **Huawei** y la opción oficial que debes seleccionar:  
>    👉 **`Install Ubuntu alongside Windows Boot Manager`** *(Instalar Ubuntu junto a Windows)*.
> 3. En la sección de la BIOS, te incluí la configuración exacta para tu **Huawei** (con la interfaz azul de *InsydeH2O*) y también las fotos de cómo lo hice en mi Lenovo.
> 
> En cada paso clave he colocado recuadros especiales resaltando qué verás tú en Windows para que tengas la certeza absoluta de qué botón pulsar sin miedo. ¡Todo lo demás es exactamente igual!

---

## 📑 Índice de Contenidos

1. [¿Qué es exactamente lo que vamos a hacer? Se llama DUAL BOOT (Dualboot)](#-what-exactly-are-we-doing-its-called-dual-boot-dualboot--qué-es-exactamente-lo-que-vamos-a-hacer)
2. [Paso 0 Precaución Obligatoria: ¡No olvides respaldar tus archivos!](#-step-0-mandatory-precaution--paso-0-precaución-obligatoria-no-olvides-respaldar-tus-archivos)
3. [Nota Importante sobre las Fotos de esta Guía](#-nota-importante-sobre-las-fotos-de-esta-guía-lee-esto-primero)
4. [¿Qué falló con Rufus y por qué balenaEtcher es la solución?](#-1-qué-falló-con-rufus-y-por-qué-balenaetcher-es-la-solución)
5. [Ajuste Previo: Comprobar y Desactivar BitLocker o el Cifrado de Dispositivo](#-ajuste-previo-comprobar-y-desactivar-bitlocker-o-el-cifrado-de-dispositivo)
6. [Fase 1: Resucitar y Limpiar la Memoria USB desde Windows (Diskpart)](#-fase-1-resucitar-y-limpiar-la-memoria-usb-desde-windows-diskpart)
7. [Fase 2: Descarga de la Imagen Oficial (ISO) de Ubuntu LTS](#-fase-2-descarga-de-la-imagen-oficial-iso-de-ubuntu-lts)
8. [Fase 3: ¿Por qué balenaEtcher y no Rufus? (Comparativa)](#-fase-3-por-qué-balenaetcher-y-no-rufus-comparativa)
9. [Fase 4: Grabado Infalible de la USB con balenaEtcher](#-fase-4-grabado-infalible-de-la-usb-con-balenaetcher)
10. [Fase 5: Configuración de BIOS y Solución a "Secure Boot"](#-fase-5-configuración-de-bios-y-solución-a-secure-boot)
    - [Caso A: BIOS tipo InsydeH2O (Ejemplo de YouTube - Huawei MateBook)](#-caso-a-bios-tipo-insydeh2o-insydeh2o-setup-utility--ejemplo-de-referencia-de-youtube)
    - [Caso B: BIOS Lenovo Setup Utility (Fotos reales de mi laptop)](#-caso-b-bios-lenovo-lenovo-setup-utility--fotos-reales-de-mi-laptop)
11. [Fase 6: Inicio desde la USB (Menú de Booteo F12 y GNU GRUB)](#-fase-6-inicio-desde-la-usb-menú-de-booteo-f12-y-gnu-grub)
12. [Fase 7: El Asistente de Instalación Gráfico de Ubuntu (Paso a Paso)](#-fase-7-el-asistente-de-instalación-gráfico-de-ubuntu-paso-a-paso)
13. [Fase 8: ¡El Paso Más Crítico! Convivencia Dual Boot con Windows](#-fase-8-el-paso-más-crítico-convivencia-dual-boot-con-windows)
14. [Fase 9: Asignación de Espacio en Disco (El Deslizador)](#-fase-9-asignación-de-espacio-en-disco-el-deslizador)
15. [Fase 10: Opciones de Seguridad y Cifrado](#-fase-10-opciones-de-seguridad-y-cifrado)
16. [Fase 11: Creación de tu Cuenta de Usuario](#-fase-11-creación-de-tu-cuenta-de-usuario)
17. [Fase 12: Zona Horaria y Revisión del Resumen Final](#-fase-12-zona-horaria-y-revisión-del-resumen-final)
18. [Fase 13: Copia de Archivos y Reinicio Seguro](#-fase-13-copia-de-archivos-y-reinicio-seguro)
19. [Fase 14: Tu Nuevo Arranque Dual: Cómo Elegir entre Ubuntu o Windows](#-fase-14-tu-nuevo-arranque-dual-cómo-elegir-entre-ubuntu-o-windows)
20. [Fase 15: Primeros Pasos y Actualización en Ubuntu](#-fase-15-primeros-pasos-y-actualización-en-ubuntu)
21. [Lista de Verificación Final (Certificado de Éxito)](#-lista-de-verificación-final-certificado-de-éxito)

---

## 🧠 1. ¿Qué falló con Rufus y por qué balenaEtcher es la solución?

Cuando intentaste crear el instalador con **Rufus** en tu laptop con Windows, ocurrieron varios factores técnicos en cadena que provocaron que la instalación fallara o que la máquina "rebotara" de regreso a Windows:

1. **La trampa de las opciones avanzadas en Rufus:** Rufus te pregunta sobre esquemas de partición (*GPT vs MBR*), sistemas de archivos (*FAT32 vs NTFS*) y si deseas grabar en *Modo Imagen ISO* o *Modo DD*. Si se elige una opción no alineada con tu placa base UEFI moderna, la partición de arranque queda desconfigurada.
2. **Firmas de arranque bloqueadas (Secure Boot):** Al no grabarse en modo clonación pura (DD), la BIOS de tu laptop detectó archivos que consideró "no autorizados" de fábrica y bloqueó el arranque por seguridad.
3. **Rebote inmediato (Fallback):** Al no poder iniciar la memoria USB por el bloqueo, la computadora hizo lo único que sabía hacer para protegerte: saltarse la USB e iniciar **Windows** como siempre.
4. **La solución con balenaEtcher:** **balenaEtcher** no te confunde con decenas de menús. Realiza una **clonación bit a bit idéntica** (modo DD nativo) de la imagen oficial de Ubuntu, respetando las firmas UEFI oficiales de Canonical y validando cada archivo al 100%.

---

## 🛡️ Ajuste Previo: Comprobar y Desactivar BitLocker o el Cifrado de Dispositivo

> [!IMPORTANT]
> ### 🔍 ¿Por qué este ajuste es relevante para tu laptop y no para la mía?
> - **En tu laptop con Windows (Windows + Ubuntu):** Revisar el cifrado es una precaución fundamental antes de modificar particiones. En algunos equipos modernos con Windows 11 (como en muchos modelos de Huawei, HP, Dell, Asus o Lenovo), puede venir activado de fábrica **BitLocker** o el **cifrado de dispositivo**.
> - **En mi laptop Lenovo (Kali Linux + Ubuntu):** BitLocker no interviene porque ya no existe una partición de Windows cifrada.

Antes de instalar Ubuntu junto a Windows, es importante comprobar si la unidad de Windows está cifrada y desactivar el cifrado para permitir que Ubuntu pueda redimensionar la partición de forma segura.

### ❓ ¿Por qué importa?
El instalador de Ubuntu no puede redimensionar ni escribir en una partición de Windows NTFS que esté cifrada con BitLocker. Si el cifrado permanece activo, el instalador no detectará Windows (no aparecerá la opción de *"Instalar Ubuntu junto a Windows Boot Manager"*) o se negará a reducir el disco.

### 🔍 Cómo comprobarlo en Windows 11:
1. Abre **Configuración → Privacidad y seguridad → Cifrado de dispositivo**, si aparece esa opción.
2. También puedes buscar **Administrar BitLocker** directamente en el menú Inicio de Windows. La opción puede variar según la edición de Windows (*Home* o *Pro*).
3. Comprueba el estado. Si aparece como **Activado** o con un candado cerrado, sigue los métodos a continuación para desactivarlo.

---

### 🔓 Cómo desactivar BitLocker / Cifrado de Dispositivo en Windows (3 Métodos)

Puedes desactivarlo a través de la aplicación de **Configuración**, el **Panel de control** o mediante la **Terminal / PowerShell (Administrador)**:

#### 🔹 Método 1: Desde la Configuración (Windows 11 Home / Device Encryption)
1. Presiona **`Win + I`** para abrir la Configuración de Windows.
2. Ve a **Privacidad y seguridad** → **Cifrado de dispositivo** (*Device Encryption*).
3. Cambia el interruptor a **Desactivado** (*Off*) y confirma la acción en la ventana que aparece.

#### 🔹 Método 2: Desde el Panel de Control (Windows 11 Pro, Enterprise o Education)
1. Abre el menú Inicio, escribe **`Administrar BitLocker`** (*Manage BitLocker*) y selecciónalo.
2. Busca la unidad cifrada (generalmente la unidad **`C:`**).
3. Haz clic en **`Desactivar BitLocker`** (*Turn off BitLocker*) y confirma.
4. Espera a que Windows complete el proceso de descifrado en segundo plano.

#### 🔹 Método 3: Usando la Línea de Comandos (PowerShell o Símbolo del Sistema como Administrador)
1. Haz clic derecho en el botón de Inicio (`Win + X`) y abre **Terminal (Administrador)** o **Símbolo del sistema (Administrador)** / **PowerShell (Administrador)**.
2. Comprueba el estado del cifrado escribiendo:
   ```cmd
   manage-bde -status
   ```
   *(Revisa las líneas `Porcentaje cifrado` y `Estado de protección`).*
3. Para desactivar BitLocker en una unidad específica (por ejemplo, `C:`), ejecuta:
   ```cmd
   manage-bde -off C:
   ```
   *(También puedes usar el cmdlet oficial en PowerShell:* `Disable-BitLocker -MountPoint "C:"`*).*

> [!WARNING]
> ### ⏳ Aviso Importante sobre el Descifrado:
> * El equipo comenzará a descifrar la unidad en segundo plano; puedes seguir usando el ordenador con normalidad mientras este proceso termina.
> * **NO apagues el equipo de forma forzada ni lo desconectes de la corriente durante el descifrado.**
> * Para verificar si ya terminó, vuelve a escribir `manage-bde -status` hasta que indique **`Porcentaje cifrado: 0.0%`** y **`Estado de protección: Desactivada`**.
> * Si necesitas gestionar comandos avanzados de PowerShell, consulta la [documentación oficial en Microsoft Learn](https://learn.microsoft.com/es-es/windows/security/operating-system-security/data-protection/bitlocker/).

---

### 🎥 Video Tutorial Paso a Paso:
Puedes ver los pasos visuales para desactivar BitLocker en el siguiente video:
* 📺 **[Ver tutorial en YouTube: Cómo desactivar BitLocker en Windows](https://www.youtube.com/watch?v=aWM9DguYRMw)**

---

### ⚠️ Recomendaciones de Seguridad Esenciales:
- **Haz una copia de seguridad de tus archivos importantes:** Guarda tus fotos, documentos de estudio y trabajos en un disco externo o en la nube (Drive/OneDrive). Una copia de seguridad no sustituye la comprobación del cifrado, pero ayuda a proteger tus datos ante cualquier error accidental de particionado.
- **Localiza y guarda de forma segura la clave de recuperación de BitLocker (de 48 dígitos):** Puedes necesitarla si Windows solicita recuperar el acceso después de modificar la configuración de arranque. Consulta la [guía oficial de soporte de Microsoft](https://support.microsoft.com/es-es/windows/encontrar-la-clave-de-recuperaci%C3%B3n-de-bitlocker-6b71f327-020b-cc01-a035-109ec7031044).
- **No te limites a pulsar «Suspender protección»:** Suspender BitLocker **no equivale a descifrar el disco**. La documentación oficial de Ubuntu advierte que suspender la protección no basta para permitir una instalación guiada junto a Windows; es necesario desactivar el cifrado y esperar a que la unidad se descifre por completo.
- **Si no sabes cómo proceder:** Detén la instalación en ese punto y verifica primero con calma el estado del cifrado.

> [!CAUTION]
> **🛑 Regla de oro:** No borres particiones ni aceptes una opción que elimine Windows para intentar solucionar un problema de detección del disco.

---

## 🛠️ Fase 1: Resucitar y Limpiar la Memoria USB desde Windows (Diskpart)

Como el intento con Rufus dejó la memoria con particiones incompletas o sectores dañados, la dejaremos completamente limpia y formateada como nueva usando la herramienta nativa de Windows: `diskpart`.

### Paso 1.1: Abrir la Terminal como Administrador
1. Haz clic derecho sobre el botón de Inicio de Windows o presiona la combinación de teclas **`Windows + X`**.
2. En el menú desplegable, selecciona **Terminal (Administrador)** o **PowerShell (Administrador)**.
3. Si Windows te muestra una ventana pidiendo confirmación de permisos, presiona **Sí**.

<p align="center">
  <img src="./imagenes_guia/01_menu_terminal_admin.png" alt="Menú Windows + X - Terminal (Administrador)" width="380"/>
</p>

---

### Paso 1.2: Iniciar Diskpart y listar discos disponibles
Escribe en la ventana negra/azul de la terminal:
```cmd
diskpart
```
y presiona `Enter`.

<p align="center">
  <img src="./imagenes_guia/02_ejecutar_diskpart.png" alt="Ejecutar diskpart en Terminal" width="600"/>
</p>

A continuación, escribe:
```cmd
list disk
```
y presiona `Enter`.

<p align="center">
  <img src="./imagenes_guia/03_list_disk.png" alt="Salida de list disk con Disco 0 y Disco 1" width="700"/>
</p>

> [!IMPORTANT]
> ### 🛑 REGLA DE ORO DE SEGURIDAD (Identifica tu USB por su tamaño):
> - **En el primer intento de la foto:** Solo aparecía el `Disco 0` (el disco interno de la laptop de 931 GB). Si te pasa esto, significa que Windows todavía **no ha detectado tu USB**. Desconéctala, vuelve a conectarla firmemente en otro puerto y vuelve a escribir `list disk`.
> - **En el segundo intento:** Al conectar la memoria, ya aparece el **`Disco 1` con 28 GB (recuadro verde)**. ¡Esa es la memoria USB!
> 
> 🚨 **CUIDADO CRÍTICO:** Jamás selecciones el **Disco 0 (recuadro rojo)**, porque ese es tu disco principal de Windows. Selecciona siempre el número que corresponda al tamaño de tu memoria USB (en este ejemplo, el **Disco 1**).

---

### Paso 1.3: Seleccionar y Limpiar la Memoria USB
1. Selecciona tu memoria USB con su número (cambia el `1` si en tu caso tuviera otro número):
```cmd
select disk 1
```
*(Windows responderá: `"El disco 1 es ahora el disco seleccionado"` - recuadro celeste).*

2. Ejecuta el borrado profundo para eliminar cualquier rastro o partición corrupta dejada por Rufus:
```cmd
clean
```
*(Windows responderá: `"DiskPart ha limpiado el disco satisfactoriamente"` - recuadro verde).*

<p align="center">
  <img src="./imagenes_guia/04_clean_disk.png" alt="select disk 1 y clean completados" width="700"/>
</p>

---

### Paso 1.4: Reconstruir la Partición y Formatear
Escribe estos comandos uno tras otro, pulsando `Enter` después de cada uno:

```cmd
create partition primary
select partition 1
active
format fs=fat32 quick
assign
exit
```

<p align="center">
  <img src="./imagenes_guia/05_formatear_y_asignar.png" alt="Particionado, formateo y asignación completados" width="700"/>
</p>

> [!TIP]
> ### 🎉 ¡Tu memoria USB ha vuelto a la vida!
> - **`format fs=fat32 quick` (recuadro verde):** Dejó la memoria en blanco, sana y lista para recibir cualquier sistema operativo.
> - **`assign` (recuadro celeste):** Le asignó una letra de unidad en Windows. En este instante escucharás el sonido de *"dispositivo conectado"* y tu memoria volverá a aparecer vacía y limpia en el Explorador de Archivos (*Este equipo*).

Para cerrar la consola por completo, escribe `exit` una vez más:

<p align="center">
  <img src="./imagenes_guia/06_salir_diskpart.png" alt="Salir de DiskPart con el comando exit" width="600"/>
</p>

---

## 📥 Fase 2: Descarga de la Imagen Oficial (ISO) de Ubuntu LTS

Para asegurarnos de que ningún archivo venga alterado, **descargaremos la imagen oficial directamente desde los servidores de Canonical**:

### Paso 2.1: Entrar a la página oficial
Abre tu navegador web y entra a:
* 🌐 **[ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)**

### Paso 2.2: Elegir la arquitectura correcta (¡Muy importante!)
En la página verás dos botones de descarga. Presta mucha atención:

1. **✅ `Intel or AMD 64-bit architecture` -> Botón "Download 5.9GB" (ESTE ES EL QUE DEBES ELEGIR):**
   * El 99% de las laptops de uso común (con procesadores **Intel Core i3/i5/i7, Celeron** o **AMD Ryzen**, como tu laptop) utilizan esta arquitectura.
   * **Este es el único botón que debes presionar.**

2. **❌ `ARM 64-bit architecture` -> Botón "Download 3.9GB" (NO elegir):**
   * Es exclusivamente para procesadores tipo ARM especiales (como chips Snapdragon o Raspberry Pi). Si descargas esta, la laptop no podrá arrancar.

> [!NOTE]
> **¿Qué significa LTS?**  
> Verás que dice **LTS** (*Long Term Support* / Soporte Extendido). Significa que es la versión de máxima estabilidad aprobada para trabajo diario, con 5 años de actualizaciones oficiales continuas y sin experimentos que puedan desconfigurar tu arranque.

<p align="center">
  <img src="./imagenes_guia/08_descarga_web_ubuntu.png" alt="Botón oficial de descarga Intel or AMD 64-bit 5.9GB" width="750"/>
</p>

---

### Paso 2.3: Monitorear la descarga en tu navegador
Al hacer clic en el botón verde, la descarga comenzará automáticamente:

<p align="center">
  <img src="./imagenes_guia/09_descarga_progreso_iso.png" alt="Descarga en curso de la imagen ISO oficial" width="420"/>
</p>

* **Verifica el nombre:** Debe llamarse algo como `ubuntu-26.04.1-desktop-amd64.iso` (o similar versión `desktop-amd64.iso`).
* **Paciencia:** El archivo pesa aproximadamente 6 GB. Espera a que termine al 100% en tu carpeta de **Descargas** antes de continuar.

---

## ⚖️ Fase 3: ¿Por qué balenaEtcher y no Rufus? (Comparativa)

| Aspecto | Con Rufus (Por qué tuviste problemas) | Con balenaEtcher (Por qué ahora saldrá perfecto) |
| :--- | :--- | :--- |
| **Facilidad de uso** | Muestra menús confusos (GPT, MBR, FAT32, NTFS, tamaño de clúster). | **3 clics visuales.** Cero configuraciones complejas. |
| **Método de grabación** | Por defecto extrae archivos; si cambias una opción, altera el arranque EFI. | **Clonación bit a bit idéntica (Modo DD)** automática. |
| **Firmas UEFI** | Puede generar certificados rechazados por la BIOS. | Conserva al 100% las firmas oficiales de arranque de Canonical. |
| **Comprobación de errores** | Opcional y casi nadie la usa. | **Validación automática obligatoria** al terminar para garantizar cero errores. |

---

## 🚀 Fase 4: Grabado Infalible de la USB con balenaEtcher

### Paso 4.1: Descargar balenaEtcher
Descarga el programa gratuito desde su sitio web oficial:
* 🌐 **[etcher.balena.io](https://etcher.balena.io/)** (Elige la opción *Etcher for Windows Installer* e instálalo en tu equipo).

---

### Paso 4.2: Los 3 Clics de Grabado
Conecta tu memoria USB limpia e inicia **balenaEtcher**:

<p align="center">
  <img src="./imagenes_guia/07_balena_interfaz.png" alt="Interfaz de balenaEtcher con los 3 pasos marcados" width="700"/>
</p>

1. **🟦 Clic 1 (`Flash from file` - recuadro celeste):** Haz clic y busca en tu carpeta de *Descargas* el archivo `.iso` de Ubuntu que acabas de descargar.
2. **🟩 Clic 2 (`Select target` - recuadro verde):** Haz clic y selecciona tu memoria USB (la de ~28 a 32 GB).
3. Una vez seleccionados ambos, la interfaz lucirá exactamente así:

<p align="center">
  <img src="./imagenes_guia/10_balena_listo_para_flash.png" alt="balenaEtcher listo con ISO y USB seleccionados" width="700"/>
</p>

4. **🟧 Clic 3 (`Flash!` - recuadro azul resplandeciente):** Presiona **Flash!** para iniciar la grabación. Si Windows te pide permisos de administrador, haz clic en **Sí**.

---

### Paso 4.3: Proceso de Flasheo y Verificación
balenaEtcher trabajará automáticamente en dos etapas:

<p align="center">
  <img src="./imagenes_guia/11_balena_flasheando.png" alt="balenaEtcher grabando en curso" width="700"/>
</p>

* Primero verás **Flashing...** (copiando la imagen de Ubuntu a la memoria).
* Luego verás **Validating...** (comprobando que no haya un solo byte dañado en el arranque).
* En pocos minutos verás el aviso en color verde: **Flash Complete!**. ¡Listo! Puedes cerrar balenaEtcher.

---

> [!WARNING]
> ### 🚨 ¡ALERTA ROJA! La trampa de Windows: "¿Desea formatear el disco?"
> Apenas balenaEtcher termina de grabar, Windows detectará que la USB tiene particiones con formato Linux que Windows no sabe leer. En ese instante, Windows te lanzará esta ventana emergente:
> 
> <p align="center">
>   <img src="./imagenes_guia/12_alerta_formatear_windows.png" alt="Alerta de formatear disco en Windows" width="450"/>
> </p>
> 
> * **🛑 ¿Por qué dice "El disco está protegido contra escritura" si intentas formatearlo?**  
>   ¡Esto es algo excelente! balenaEtcher y Ubuntu bloquean la USB en modo de solo lectura precisamente **para evitar que Windows destruya el instalador que acabas de crear**.  
> * **✅ ¿Qué debes hacer?**  
>   Haz clic firme en **`Cancelar` (recuadro verde)** o cierra la ventana con la `X`. **JAMÁS aceptes formatearla**, porque si lo hicieras borrarías Ubuntu y tendrías que volver a empezar.

---

### ❓ ¿Por qué ahora aparecen 2 unidades (`D:` y `E:`) en "Este equipo"?
Si abres tu Explorador de Archivos, verás que tu única memoria USB física ahora aparece separada en dos letras:

<p align="center">
  <img src="./imagenes_guia/13_dos_unidades_usb.png" alt="Dos unidades de USB creadas en Windows" width="450"/>
</p>

* **🟦 Unidad D: (recuadro celeste - Instalador de Ubuntu):** Contiene el sistema operativo completo comprimido (el escritorio, los programas y el instalador).
* **🟩 Unidad E: (recuadro verde - Partición EFI Boot):** Contiene la "llave digital de arranque" (**UEFI**) con los certificados oficiales de Canonical para que la laptop pueda iniciar.
* Ambas partes forman tu pendrive instalador perfecto. Ya estás lista para configurar la BIOS.

---

## 🛡️ Fase 5: Configuración de BIOS y Solución a "Secure Boot"

Para que tu laptop acepte iniciar desde la memoria USB en lugar de irse directo a Windows, debemos entrar a la BIOS de la computadora. 

### ⌨️ ¿Qué tecla presionar para entrar a la BIOS según la marca de tu laptop?
Con tu laptop completamente apagada, enciéndela y presiona inmediatamente y de forma repetida la tecla correspondiente:

| Marca de tu Laptop | Tecla para entrar a la BIOS | Tecla rápida de Booteo |
| :--- | :--- | :--- |
| **Huawei / Honor** | `F2` (o `Fn + F2`) | `F12` |
| **HP** | `F10` o `Esc` | `F9` |
| **ASUS** | `F2` o `Delete` | `F8` o `Esc` |
| **Lenovo** | `F2` (o `Fn + F2`) | `F12` (o `Fn + F12`) |
| **Dell** | `F2` | `F12` |
| **Acer** | `F2` | `F12` |

---

### 💻 Caso A: BIOS tipo InsydeH2O (`InsydeH2O Setup Utility` — Ejemplo de referencia de YouTube)

> [!NOTE]
> **🎬 Sobre esta captura de pantalla:**  
> Esta pantalla fue tomada como referencia visual de un video de YouTube en una **Huawei MateBook**. Muchas laptops con Windows (Huawei, Acer, algunas HP, etc.) utilizan exactamente este modelo de BIOS llamado **InsydeH2O**, caracterizado por una sola pantalla azul con una lista vertical. Si la BIOS de tu laptop se ve así, sigue estos pasos:

<p align="center">
  <img src="./imagenes_guia/14_bios_huawei.png" alt="Pantalla de BIOS InsydeH2O tomada de YouTube" width="750"/>
</p>

#### 🔍 Los 2 Culpables del Bloqueo en este tipo de BIOS:
1. **🚨 Culpable 1: El arranque por USB viene apagado de fábrica (Recuadro rojo):**
   * En la sección **`Bootable Device`**, la línea:  
     `USB Device 1: TOSHIBA TransMemory   <Disable>`  
     está configurada en **`<Disable>` (Deshabilitado)**. La laptop tiene una orden estricta de **prohibir arrancar desde cualquier memoria USB**.
2. **⚠️ Culpable 2: Secure Boot activado (Recuadro naranja):**
   * En la sección **`Security Setting`**, la opción:  
     `Secure Boot   <Enable>`  
     bloquea cualquier sistema operativo externo.

#### 🛠️ Solución paso a paso en BIOS InsydeH2O:
1. Con tu laptop apagada, enciéndela y presiona repetidamente la tecla para entrar a la BIOS (generalmente `F2`).
2. Con las flechas de tu teclado `↑ / ↓`, baja hasta situarte sobre la línea de tu memoria USB:  
   `USB Device 1: ... <Disable>`
3. Presiona **`F5` o `F6`** (o presiona `Enter`) para cambiar el valor de `<Disable>` a **`<Enable>`** *(recuadro verde)*.
4. Baja con la flecha hasta situarte sobre **`Secure Boot`**.
5. Presiona **`F5` o `F6`** para cambiar de `<Enable>` a **`<Disable>`**.
6. **Guardar cambios y reiniciar:** Presiona la tecla **`F10` (recuadro celeste en la esquina inferior)** para guardar y salir (*Save and Exit*). Confirma con `Enter`.

---

### 💻 Caso B: BIOS Lenovo (`Lenovo Setup Utility` — Fotos reales de mi laptop)

En las fotos que tomé en mi laptop Lenovo, la interfaz de la BIOS se divide en pestañas superiores (`Information`, `Configuration`, `Security`, `Boot`, `Exit`). Esto fue lo que configuré:

<p align="center">
  <img src="./imagenes_guia/15_bios_lenovo_security.jpg" alt="Pestaña Security en Lenovo Setup Utility" width="700"/>
</p>

1. Entré a la BIOS con **`Fn + F2`**.
2. Fui con la flecha derecha hasta la pestaña **`Security`** *(recuadro celeste en la foto)*.
3. Bajé hasta la opción **`Secure Boot`** (que venía en `[Enabled]` con *recuadro rojo*) y la cambié a **`[Disabled]`** *(recuadro verde)*:

<p align="center">
  <img src="./imagenes_guia/16_bios_lenovo_disable.jpg" alt="Desactivar Secure Boot en Lenovo" width="700"/>
</p>

4. Presioné **`F10`** para guardar cambios (*Save configuration changes and exit now?*) y elegí **`[Yes]`** *(recuadro verde en la foto)*:

<p align="center">
  <img src="./imagenes_guia/18_bios_lenovo_guardar_f10.jpg" alt="Confirmación de guardado con F10 en Lenovo" width="550"/>
</p>

> [!WARNING]
> ### 🚨 La trampa común al guardar en Lenovo: Evitar la tecla F9
> Si por error se presiona **`F9`** en lugar de `F10`, aparece este cuadro:
> 
> <p align="center">
>   <img src="./imagenes_guia/17_bios_lenovo_alerta_f9.jpg" alt="Alerta Setup Confirmation - Load default configuration now" width="550"/>
> </p>
> 
> `F9` significa *Restaurar valores de fábrica*. Si te aparece la alerta del recuadro rojo (*"Load default configuration now?"*), **NO presiones `[YES]`**, ya que la BIOS cancelaría tu cambio y volvería a prender Secure Boot. Siempre debes seleccionar **`[NO]`** *(recuadro verde)* y luego presionar **`F10`**.

---

## 💻 Fase 6: Inicio desde la USB (Menú de Booteo F12 y GNU GRUB)

1. Conecta tu memoria USB a la laptop apagada.
2. Enciéndela y presiona inmediatamente de forma repetida la tecla **`F12`** (o **`Fn + F12`** en laptops con teclas de función invertidas) hasta que aparezca la lista de dispositivos de arranque (**Boot Manager**).
3. Con las flechas del teclado `↑ / ↓`, selecciona tu memoria USB (puede figurar con la marca de tu pendrive como *Kingston*, *Toshiba*, *SanDisk*, o bajo el nombre genérico *Linpus lite*) y presiona **`Enter`**.
4. Verás aparecer inmediatamente la pantalla oficial del menú de arranque **GNU GRUB**:

<p align="center">
  <img src="./imagenes_guia/21_grub_try_or_install_ubuntu.jpg" alt="Menú GNU GRUB con opción Try or Install Ubuntu" width="650"/>
</p>

* La primera opción vendrá seleccionada por defecto: **`*Try or Install Ubuntu`** *(recuadro verde)*.
* Presiona **`Enter`** (o simplemente espera 5 segundos a que continúe solo).

---

### ⏳ La pantalla de carga: ¿Por qué aparece el logo del fabricante?
Al presionar `Enter`, la pantalla se pondrá negra y verás aparecer el logo de tu laptop con el logo naranja de Ubuntu en la parte inferior:

<p align="center">
  <img src="./imagenes_guia/22_splash_lenovo_ubuntu.jpg" alt="Pantalla de arranque con logo del fabricante y Ubuntu" width="650"/>
</p>

* **En mi foto:** Aparece el logo de **Lenovo** porque yo usé mi laptop.
* **En tu laptop:** Verás aparecer el logo del fabricante de tu laptop (sea HP, ASUS, Lenovo, Dell, Acer, etc.) con el logo de **Ubuntu** debajo.
* **¿Qué significa?** Es la mejor señal posible: confirma que el instalador cargó con éxito todos los controladores de pantalla de tu laptop.

---

## 🌐 Fase 7: El Asistente de Instalación Gráfico de Ubuntu (Paso a Paso)

Tras unos segundos de carga, aparecerá el escritorio y el instalador visual de Ubuntu con fondo morado. Iremos pantalla por pantalla:

### Paso 7.1: Idioma de Bienvenida
En la ventana **`Welcome to Ubuntu`**:

<p align="center">
  <img src="./imagenes_guia/23_instalador_bienvenida_idioma.jpg" alt="Selección de idioma en el instalador de Ubuntu" width="650"/>
</p>

1. Baja en la lista hasta seleccionar **`Español`** *(recuadro verde)*.
2. Haz clic en el botón **`Next` / `Siguiente`** en la esquina inferior derecha *(recuadro celeste)*.

> [!TIP]
> **💡 Consejo importante:**  
> Aunque después prefieras usar el sistema en inglés, **durante la instalación es muy recomendable elegir Español**. Así podrás leer las confirmaciones de discos y particiones con total claridad y tranquilidad.

---

### Paso 7.2: Accesibilidad (`Accessibility`)
Aparecerá una ventana introductoria con funciones de accesibilidad (visión, audición, zoom):

<p align="center">
  <img src="./imagenes_guia/24_instalador_accesibilidad.jpg" alt="Pantalla de opciones de accesibilidad en Ubuntu" width="650"/>
</p>

* No necesitas cambiar nada aquí a menos que lo desees.
* Simplemente haz clic en **`Next` / `Siguiente`** *(recuadro celeste)* para continuar.

---

### Paso 7.3: Disposición del Teclado
Aquí configuras el teclado para que las teclas coincidan exactamente con lo que escribes:

<p align="center">
  <img src="./imagenes_guia/25_instalador_teclado.jpg" alt="Configuración de distribución del teclado" width="650"/>
</p>

1. Selecciona **`Español (Latinoamericano)`** (o *Español* según tu laptop).
2. **Prueba obligatoria:** Haz clic en el cuadro blanco de prueba y escribe:
   - `ñ` / `Ñ`
   - `@` (usando `Alt Gr + Q` o `Alt Gr + 2`)
   - `-` y `_`
3. Si los caracteres coinciden con tu teclado físico, haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

### Paso 7.4: Conexión a Internet (Wi-Fi)
El instalador detectará las redes inalámbricas disponibles:

<p align="center">
  <img src="./imagenes_guia/26_instalador_conexion_wifi.jpg" alt="Conexión a red Wi-Fi en el instalador" width="650"/>
</p>

1. Selecciona el nombre de tu red Wi-Fi de casa.
2. Introduce tu contraseña y haz clic en **Connect** / Conectar.
3. Haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.  
   *(Estar conectada a internet permite que Ubuntu descargue automáticamente el paquete completo de traducción al español y los controladores más recientes).*

---

### Paso 7.5: ¿Qué desea hacer con Ubuntu?
Aparecerá la pantalla que te pregunta: *"What do you want to do with Ubuntu?"*:

<p align="center">
  <img src="./imagenes_guia/27_instalador_probar_o_instalar.jpg" alt="Opción Install Ubuntu seleccionada" width="650"/>
</p>

* Marca la opción: **`Install Ubuntu`** *(Install Ubuntu alongside or instead of your current operating system - recuadro verde)*.
* Haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

### Paso 7.6: Tipo de Instalación (`Interactive installation`)
Ubuntu te preguntará cómo prefieres llevar a cabo la instalación:

<p align="center">
  <img src="./imagenes_guia/28_instalador_tipo_interactivo.jpg" alt="Selección de instalación interactiva" width="650"/>
</p>

* ✅ Selecciona **`Interactive installation`** *(Instalación interactiva - recuadro verde)*.  
  Esta opción te permite revisar visualmente cada pantalla con total control.
* Haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

### Paso 7.7: Optimización y Software de Terceros
En la pantalla *"Optimise your computer / Install recommended proprietary software?"*:

<p align="center">
  <img src="./imagenes_guia/29_instalador_controladores_terceros.jpg" alt="Casillas de software privativo y códecs multimedia marcadas" width="650"/>
</p>

1. ☑️ **`Install third-party software for graphics and Wi-Fi hardware` (Recuadro verde):**  
   **¡Marca siempre esta casilla!** Instala los controladores oficiales para que tu tarjeta Wi-Fi y tus gráficos funcionen a máxima velocidad.
2. ☑️ **`Download and install support for additional media formats`:**  
   Marca esta casilla para que puedas reproducir videos y música (MP4, MP3) sin problemas desde el primer día.
3. Haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

## 🚨 Fase 8: ¡El Paso Más Crítico! Convivencia Dual Boot con Windows

> [!CAUTION]
> ### 🛑 ATENCIÓN MÁXIMA: La pantalla más importante de toda la instalación
> Aquí el instalador te pregunta: **`How do you want to install Ubuntu?` (¿Cómo quiere instalar Ubuntu?)**.  
> Lee con mucha atención la siguiente explicación para entender lo que verás en tu pantalla:

<p align="center">
  <img src="./imagenes_guia/30_instalador_alongside_kali.jpg" alt="Pantalla de instalación alongside otro sistema" width="700"/>
</p>

### 🔍 La diferencia explicada entre mi foto y tu pantalla:
* **En mi foto (arriba):** Aparece la opción:  
  `Install Ubuntu alongside Kali GNU/Linux Rolling` *(recuadro verde)*  
  porque en mi laptop yo ya tenía Kali Linux instalado.
* **En TU pantalla (en tu laptop con Windows):** Aparecerá exactamente esta opción:  
  👉 **`Install Ubuntu alongside Windows Boot Manager`** *(o "Instalar Ubuntu junto a Windows Boot Manager")*.

---

### 📋 Cuál elegir y cuáles EVITAR:
1. ✅ **`Install Ubuntu alongside Windows Boot Manager` (ESTA ES LA ÚNICA QUE DEBES ELEGIR):**  
   * **¡ESTA ES TU OPCIÓN!** Permite que Ubuntu y Windows convivan como buenos vecinos. Conserva tu Windows intacto, no borra tus fotos, ni tus programas, ni tu información personal.
2. 🛑 **`Erase Windows Boot Manager and install Ubuntu` (¡NO ELEGIR! - Recuadro rojo intermedio):**  
   * Borraría tu Windows para dejar solo Ubuntu.
3. 🛑 **`Erase disk and install Ubuntu` (¡PELIGRO MÁXIMO! - Recuadro rojo inferior):**  
   * Destruiría todas las particiones del disco duro. **Nunca marques esta opción.**

Una vez seleccionada la opción **alongside Windows Boot Manager**, haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

## ⚖️ Fase 9: Asignación de Espacio en Disco (El Deslizador)

Al elegir la opción *alongside*, verás una pantalla llamada **`Choose where to install Ubuntu`** con una barra divisoria interactiva:

<p align="center">
  <img src="./imagenes_guia/31_instalador_deslizador_particion.jpg" alt="Barra deslizante de partición de disco" width="700"/>
</p>

### 📐 Cómo repartir el espacio de tu disco:
* **En mi foto:** Verás la partición repartida entre Ubuntu y Kali.
* **En tu laptop:** Verás la partición repartida entre **Ubuntu** y tu sistema **Windows**.
* **Cómo usar el deslizador:** Haz clic con el mouse sobre el punto de división central y arrástralo hacia la izquierda o derecha:
  - **Espacio recomendado para Ubuntu:** Asígnale entre **40 GB y 70 GB** (espacio de sobra para el sistema operativo, tus herramientas de estudio, desarrollo y archivos personales).
  - **Espacio para Windows:** Asegúrate de dejarle a Windows suficiente espacio libre para sus tareas normales y actualizaciones.
* Cuando estés conforme con la distribución, haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

## 🔒 Fase 10: Opciones de Seguridad y Cifrado

Aparecerá la pantalla **`Encryption and file system`** (Cifrado y sistema de archivos):

<p align="center">
  <img src="./imagenes_guia/32_instalador_cifrado.jpg" alt="Opciones de cifrado en instalador de Ubuntu" width="650"/>
</p>

* En una instalación Dual Boot con Windows, la opción recomendada es:  
  ⚪ **`No encryption`** *(Sin cifrado)*.  
  *(Cifrar la partición añade contraseñas de arranque adicionales que pueden causar conflictos innecesarios con el gestor de arranque de Windows).*
* Haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

## 👤 Fase 11: Creación de tu Cuenta de Usuario

En la pantalla **`Create your account`**, completarás tus datos personales para acceder a tu nuevo sistema:

<p align="center">
  <img src="./imagenes_guia/33_instalador_cuenta_usuario.jpg" alt="Formulario de creación de cuenta de usuario" width="650"/>
</p>

### ✍️ Guía para rellenar los campos:
1. **Su nombre (`Your name`):** Tu nombre real (ej. `钱奕彤`).
2. **Nombre de su equipo (`Your computer's name`):** El nombre con el que se identificará tu laptop en la red (ej. `yitong-matebook` o `matebook-ubuntu`). Escríbelo en minúsculas y sin espacios.
3. **Nombre de usuario (`Pick a username`):** El nombre técnico de tu cuenta y de tu carpeta personal (`/home/usuario`). Debe ser en **minúsculas y sin espacios ni caracteres especiales** (ej. `yitong`).
4. **Contraseña (`Choose a password`) y Confirmar contraseña:**  
   > [!IMPORTANT]
   > Esta contraseña será tu clave maestra de administración (**`sudo`**). La necesitarás cada vez que instales un programa o hagas cambios importantes en el sistema. Elige una que recuerdes bien y no la olvides.
5. **Inicio de sesión:** Marca la casilla **`Solicitar mi contraseña para iniciar sesión`** *(Require my password to log in)* para que nadie pueda entrar sin tu permiso.
6. Haz clic en **`Next` / `Siguiente`** *(recuadro celeste)*.

---

## 🕒 Fase 12: Zona Horaria y Revisión del Resumen Final

### 12.1. Zona Horaria (Lima, Perú)
* En el mapa que aparecerá, haz clic sobre **Perú** o escribe en la barra inferior: **`Lima`**.
* La zona horaria debe marcar **`America/Lima` (UTC-05:00)**.
* *(Configurar la hora exacta evita fallos de certificados de seguridad HTTPS al navegar por internet).*
* Haz clic en **Siguiente**.

### 12.2. Resumen final (El Punto de No Retorno)
Aparecerá una ventana de confirmación titulada:  
`¿Desea escribir los cambios en los discos? (Write changes to disk?)`

* **Hasta este segundo exacto, tu disco duro NO ha sido modificado.** Si apagaras la laptop en este instante, todo seguiría exactamente igual en tu Windows.
* Revisa que el resumen indique la **redimensión** de tu disco y la creación de una partición nueva `ext4` para Ubuntu.
* Cuando estés lista y segura, haz clic en **`Instalar` / `Install`**. ¡A partir de aquí comienza la magia!

---

## ⏳ Fase 13: Copia de Archivos y Reinicio Seguro

El instalador comenzará a copiar los archivos del sistema a tu disco duro mientras te muestra una presentación con las novedades y aplicaciones de Ubuntu:

<p align="center">
  <img src="./imagenes_guia/34_instalador_copiando_archivos.jpg" alt="Barra de progreso de instalación copiando archivos" width="650"/>
</p>

> [!WARNING]
> * **Mantén tu laptop enchufada al cargador:** Evita que la batería se agote a mitad del proceso.
> * **No toques la memoria USB:** No la desconectes mientras la barra de progreso esté avanzando.

### El momento del reinicio:
Al culminar el proceso, aparecerá una ventana que dice:  
`Instalación terminada: Puede reiniciar su equipo para usar la nueva instalación.`

1. Haz clic en **`Reiniciar ahora` (`Restart Now`)**.
2. La pantalla se pondrá negra y verás un mensaje con letras blancas que dice:
   ```text
   Please remove the installation medium, then press ENTER:
   ```
3. **Paso fundamental:** Retira suavemente tu memoria USB del puerto de la laptop y luego presiona la tecla **`Enter`**.

---

## 🐧 Fase 14: Tu Nuevo Arranque Dual: Cómo Elegir entre Ubuntu o Windows

A partir de ahora, cada vez que enciendas tu laptop, aparecerá una pantalla azul/negra llamada **Menú GNU GRUB**:

```text
                       GNU GRUB version 2.12
 -----------------------------------------------------------------
  *Ubuntu
   Advanced options for Ubuntu
   Windows Boot Manager (on /dev/nvme0n1p1)
   UEFI Firmware Settings
 -----------------------------------------------------------------
   Use the ^ and v keys to select which entry is highlighted.
   Press enter to boot the selected OS.
```

* **Si quieres entrar a Ubuntu:** Presiona `Enter` sobre la primera opción (**`Ubuntu`**).
* **Si quieres entrar a tu Windows habitual:** Baja con la flecha `↓` de tu teclado hasta la opción:  
  👉 **`Windows Boot Manager`** y presiona `Enter`. Entrarás a tu Windows exactamente como siempre, con todos tus archivos, programas y fotos intactos.

> [!TIP]
> **❓ ¿Qué pasa si al encender la laptop entra directo a Windows sin mostrar este menú?**  
> ¡No te preocupes! Significa simplemente que tu BIOS le dio prioridad a Windows. Solo enciende la laptop, presiona `F2` para entrar a la BIOS, ve a la sección de **Boot Order** (Orden de arranque) y mueve **`ubuntu`** al primer lugar por encima de *Windows Boot Manager*. Guarda con `F10` y el menú volverá a aparecer siempre.

---

## 🚀 Fase 15: Primeros Pasos y Actualización en Ubuntu

### 15.1. El Asistente de Bienvenida
Al entrar a Ubuntu por primera vez, verás una ventana de bienvenida:
* **Ubuntu Pro:** Puedes hacer clic en **`Skip` / Omitir**.
* **Ayudar a mejorar Ubuntu:** Puedes marcar *No enviar información*.
* **Ubicación:** Puedes dejarla desactivada.
* ¡Y listo! Ya estás en tu flamante escritorio de Ubuntu.

---

### 15.2. Tu primera actualización desde la Terminal
Vamos a dejar todos los programas y controladores al día con los servidores oficiales de Canonical:

1. Abre la terminal presionando el atajo de teclado:  
   `Ctrl + Alt + T`
2. Escribe el siguiente comando y presiona `Enter`:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
3. La terminal te pedirá tu contraseña (la que creaste en el formulario).
   > [!NOTE]
   > Por motivos de seguridad en Linux, **al escribir tu contraseña en la terminal no aparecerán asteriscos ni puntos**. Es completamente normal. Escríbela con seguridad y presiona `Enter`.
4. El sistema descargará e instalará todas las mejoras oficiales.

---

## 🏆 Lista de Verificación Final (Certificado de Éxito)

Marca mentalmente cada punto para confirmar que tu instalación fue un éxito rotundo:

- [ ] Copia de seguridad (backup) de archivos importantes creada antes de empezar.
- [ ] Memoria USB restaurada limpiamente con `diskpart` en Windows.
- [ ] ISO oficial descargada en versión de 64 bits (Intel/AMD).
- [ ] USB grabada sin errores y verificada al 100% con balenaEtcher.
- [ ] Alerta de formateo de Windows cancelada a tiempo sin alterar el pendrive.
- [ ] BIOS configurada con arranque USB habilitado y *Secure Boot* desactivado.
- [ ] Menú F12 utilizado con calma y selección de *Try or Install Ubuntu*.
- [ ] Instalación seleccionada junto a tu sistema actual (**alongside Windows Boot Manager**).
- [ ] Espacio en disco repartido de forma cómoda para ambos sistemas.
- [ ] Usuario, nombre de máquina y contraseña maestra configurados.
- [ ] Memoria USB retirada al ver el mensaje *"Please remove installation medium"*.
- [ ] Menú GRUB comprobado: puedes entrar a Ubuntu y a Windows cuando tú quieras.

---

🎉 **¡Felicitaciones bae!** Espero haber ayudado y espero que todo esto te haya servido de gran ayuda, te amo mucho y no te olvides de darme muchos besitos cuando me veas en persona. Seguramente ando durmiendo o no sé JAJAJAJ ¡muaaaaaaaaaa! 💕
