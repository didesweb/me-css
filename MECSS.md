# me.css — Documentación

Librería CSS utilitaria de Roque Arnás Izquierdo.  
Generada con Sass/SCSS a partir de `_variables.scss`, `_mixins.scss` y `_me.scss`.

---

## Breakpoints

| Alias   | Min-width |
|---------|-----------|
| xs      | 0 (base)  |
| sm      | 576px     |
| md      | 768px     |
| lg      | 992px     |
| xl      | 1200px    |
| xxl     | 1366px    |
| xxxl    | 1512px    |

**Sintaxis responsive:** inserta el alias del breakpoint entre el prefijo y el valor.

```
.pt-20        → padding-top: 20px (todas las pantallas)
.pt-md-20     → padding-top: 20px (768px en adelante)
.d-f          → display: flex (todas)
.d-lg-f       → display: flex (992px en adelante)
.col-12       → columna 12/12 (todas)
.col-md-6     → columna 6/12 (768px en adelante)
```

---

## Contenedor

```
.box    → contenedor centrado con max-width por breakpoint
```

| Breakpoint | max-width |
|------------|-----------|
| sm         | 540px     |
| md         | 720px     |
| lg         | 960px     |
| xl         | 1120px    |
| xxl        | 1240px    |
| xxxl       | 1410px    |

Uso habitual: `.box.mx-a`

---

## Grid (12 columnas)

```
.col-{n}              → columna de n/12 (1–12)
.col-{bp}-{n}         → columna responsive
.offset-{n}           → margin-left equivalente a n columnas
.offset-{bp}-{n}      → offset responsive
.order-{n}            → flex order (1–12)
.order-{bp}-{n}       → order responsive
```

Ejemplo:
```html
<div class="d-f fxw-w m-ng-15">
    <div class="col-12 col-md-6 px-15"> ... </div>
    <div class="col-12 col-md-6 px-15"> ... </div>
</div>
```

---

## Espaciado

Rango: `0` a `100` (paso de 1px). Responsive con `{bp}`.

### Padding

| Clase            | Propiedad                          |
|------------------|------------------------------------|
| `.p-{n}`         | padding                            |
| `.pt-{n}`        | padding-top                        |
| `.pb-{n}`        | padding-bottom                     |
| `.pl-{n}`        | padding-left                       |
| `.pr-{n}`        | padding-right                      |
| `.px-{n}`        | padding-left + padding-right       |
| `.py-{n}`        | padding-top + padding-bottom       |

### Margin

| Clase            | Propiedad                          |
|------------------|------------------------------------|
| `.m-{n}`         | margin                             |
| `.mt-{n}`        | margin-top                         |
| `.mb-{n}`        | margin-bottom                      |
| `.ml-{n}`        | margin-left                        |
| `.mr-{n}`        | margin-right                       |
| `.mx-{n}`        | margin-left + margin-right         |
| `.my-{n}`        | margin-top + margin-bottom         |
| `.m-a`           | margin: auto                       |
| `.mx-a`          | margin-left + margin-right: auto   |
| `.my-a`          | margin-top + margin-bottom: auto   |
| `.mt-a`          | margin-top: auto                   |
| `.mb-a`          | margin-bottom: auto                |
| `.ml-a`          | margin-left: auto                  |
| `.mr-a`          | margin-right: auto                 |

---

## Display

| Clase      | Valor             |
|------------|-------------------|
| `.d-n`     | none              |
| `.d-i`     | inline            |
| `.d-ib`    | inline-block      |
| `.d-b`     | block             |
| `.d-tb`    | table             |
| `.d-tbr`   | table-row         |
| `.d-tbc`   | table-cell        |
| `.d-f`     | flex              |
| `.d-if`    | inline-flex       |

---

## Flexbox

### Dirección y wrap

| Clase        | Valor                    |
|--------------|--------------------------|
| `.fxd-r`     | flex-direction: row      |
| `.fxd-rr`    | row-reverse              |
| `.fxd-c`     | column                   |
| `.fxd-cr`    | column-reverse           |
| `.fxw-w`     | flex-wrap: wrap          |
| `.fxw-n`     | nowrap                   |
| `.fxw-wr`    | wrap-reverse             |

### Justify content

| Clase      | Valor          |
|------------|----------------|
| `.jc-c`    | center         |
| `.jc-fs`   | flex-start     |
| `.jc-fe`   | flex-end       |
| `.jc-sb`   | space-between  |
| `.jc-sa`   | space-around   |

### Align items

| Clase      | Valor      |
|------------|------------|
| `.ai-c`    | center     |
| `.ai-fs`   | flex-start |
| `.ai-fe`   | flex-end   |
| `.ai-b`    | baseline   |
| `.ai-s`    | stretch    |

### Align self

| Clase      | Valor      |
|------------|------------|
| `.as-a`    | auto       |
| `.as-c`    | center     |
| `.as-fs`   | flex-start |
| `.as-fe`   | flex-end   |
| `.as-b`    | baseline   |
| `.as-s`    | stretch    |

### Align content

| Clase      | Valor          |
|------------|----------------|
| `.ac-c`    | center         |
| `.ac-fs`   | flex-start     |
| `.ac-fe`   | flex-end       |
| `.ac-s`    | stretch        |
| `.ac-sa`   | space-around   |
| `.ac-sb`   | space-between  |

---

## Tipografía

### Font size — `.fz-{n}` (8–120px)

```
.fz-14        → font-size: 14px
.fz-md-18     → font-size: 18px desde md
```

### Font weight — `.fw-{valor}`

| Clase       | Valor   |
|-------------|---------|
| `.fw-100`   | 100     |
| `.fw-200`   | 200     |
| `.fw-300`   | 300     |
| `.fw-400`   | 400     |
| `.fw-500`   | 500     |
| `.fw-600`   | 600     |
| `.fw-700`   | 700     |
| `.fw-800`   | 800     |
| `.fw-900`   | 900     |

### Font style

| Clase    | Valor   |
|----------|---------|
| `.fs-n`  | normal  |
| `.fs-i`  | italic  |
| `.fs-o`  | oblique |

### Line height — `.lh-{n}` (1–100px)

```
.lh-24        → line-height: 24px
.lh-md-32     → line-height: 32px desde md
```

### Text align

| Clase    | Valor   |
|----------|---------|
| `.ta-l`  | left    |
| `.ta-r`  | right   |
| `.ta-c`  | center  |
| `.ta-j`  | justify |

### Text transform

| Clase    | Valor      |
|----------|------------|
| `.tt-l`  | lowercase  |
| `.tt-u`  | uppercase  |
| `.tt-c`  | capitalize |
| `.tt-n`  | none       |

### Text decoration

| Clase    | Valor        |
|----------|--------------|
| `.td-n`  | none         |
| `.td-u`  | underline    |
| `.td-o`  | overline     |
| `.td-l`  | line-through |

### White space

| Clase       | Valor     |
|-------------|-----------|
| `.whs-n`    | normal    |
| `.whs-p`    | pre       |
| `.whs-nw`   | nowrap    |
| `.whs-pw`   | pre-wrap  |
| `.whs-pl`   | pre-line  |

### Word break

| Clase       | Valor     |
|-------------|-----------|
| `.wob-n`    | normal    |
| `.wob-k`    | keep-all  |
| `.wob-ba`   | break-all |

### Word wrap

| Clase        | Valor        |
|--------------|--------------|
| `.wow-nm`    | normal       |
| `.wow-b`     | break-word   |

---

## Posición

| Clase      | Valor    |
|------------|----------|
| `.pos-s`   | static   |
| `.pos-r`   | relative |
| `.pos-a`   | absolute |
| `.pos-f`   | fixed    |

---

## Tamaño

| Clase         | Propiedad         |
|---------------|-------------------|
| `.w-100`      | width: 100%       |
| `.h-100`      | height: 100%      |
| `.w-a`        | width: auto       |
| `.h-a`        | height: auto      |
| `.maw-100`    | max-width: 100%   |
| `.mah-100`    | max-height: 100%  |

---

## Overflow

| Clase       | Propiedad         | Valor   |
|-------------|-------------------|---------|
| `.ov-v`     | overflow          | visible |
| `.ov-h`     | overflow          | hidden  |
| `.ov-s`     | overflow          | scroll  |
| `.ov-a`     | overflow          | auto    |
| `.ov-u`     | overflow          | unset   |
| `.ov-c`     | overflow          | clip    |
| `.ovx-h`    | overflow-x        | hidden  |
| `.ovx-a`    | overflow-x        | auto    |
| `.ovy-h`    | overflow-y        | hidden  |
| `.ovy-a`    | overflow-y        | auto    |

*(ovx y ovy admiten los mismos sufijos: v, h, s, a, u, c)*

---

## Bordes

### Border style

| Clase        | Valor   |
|--------------|---------|
| `.bds-n`     | none    |
| `.bds-s`     | solid   |
| `.bds-ds`    | dashed  |
| `.bds-dt`    | dotted  |
| `.bds-db`    | double  |

### Border size — `.bd-{n}` (0–5px, solid)

```
.bd-1           → border: 1px solid
.bdt-2          → border-top: 2px solid
.bdb-1          → border-bottom: 1px solid
.bdl-1          → border-left: 1px solid
.bdr-1          → border-right: 1px solid
```

### Border radius — `.bdrs-{n}` (1–200px)

```
.bdrs-4         → border-radius: 4px
.bdrs-50        → border-radius: 50px
```

---

## Background

| Clase          | Propiedad                       |
|----------------|---------------------------------|
| `.bgsz-a`      | background-size: auto           |
| `.bgsz-ct`     | background-size: contain        |
| `.bgsz-cv`     | background-size: cover          |
| `.bgr-n`       | background-repeat: no-repeat    |
| `.bgr-x`       | background-repeat: repeat-x     |
| `.bgr-y`       | background-repeat: repeat-y     |
| `.bgc-t`       | background-color: transparent   |

---

## Z-index — `.zi-{n}` (0–1000)

```
.zi-10          → z-index: 10
.zi-100         → z-index: 100
```

---

## Colores

Las clases de color se generan automáticamente a partir del mapa `$colors`.

| Patrón               | Propiedad                         |
|----------------------|-----------------------------------|
| `.c-{nombre}`        | color                             |
| `.bg-{nombre}`       | background-color                  |
| `.bd-{nombre}`       | border-color                      |
| `.c-hv-{nombre}`     | color (en :hover)                 |
| `.bg-hv-{nombre}`    | background-color (en :hover)      |
| `.bd-hv-{nombre}`    | border-color (en :hover)          |
| `.c-md-{nombre}`     | color desde md                    |
| `.bg-md-{nombre}`    | background-color desde md         |
| `.bd-md-{nombre}`    | border-color desde md             |

### Colores disponibles

| Grupo       | Nombres                                                                 |
|-------------|-------------------------------------------------------------------------|
| Básicos     | `transparent` `black` `white`                                           |
| Tonos       | `dark` `dark-secondary` `light` `light-secondary`                       |
| Rojo        | `red` `red-dark` `red-light`                                            |
| Naranja     | `orange` `orange-dark` `orange-light`                                   |
| Amarillo    | `yellow` `yellow-dark` `yellow-light`                                   |
| Verde       | `green` `green-dark` `green-light`                                      |
| Azul        | `blue` `blue-dark` `blue-light` `blue-info`                             |
| Gris        | `gray` `gray-dark` `gray-light`                                         |
| Otros       | `brown` `sand` `beige`                                                  |
| Neutrales   | `neutral-00` `neutral-03` `neutral-05` `neutral-10` … `neutral-90`     |
| Estado      | `success` `warning` `error` `info` `info-light`                         |
| Texto       | `txt-dark` `txt-dark-secondary` `txt-light` `txt-light-secondary`       |

---

## Visibilidad

| Clase    | Valor    |
|----------|----------|
| `.v-v`   | visible  |
| `.v-h`   | hidden   |
| `.v-c`   | collapse |

---

## Cursor

| Clase      | Valor      |
|------------|------------|
| `.cur-p`   | pointer    |
| `.cur-d`   | default    |
| `.cur-a`   | auto       |
| `.cur-m`   | move       |
| `.cur-t`   | text       |
| `.cur-he`  | help       |
| `.cur-c`   | crosshair  |

---

## Box sizing

| Clase        | Valor       |
|--------------|-------------|
| `.bxz-bb`    | border-box  |
| `.bxz-cb`    | content-box |
| `.bxz-in`    | inherit     |

---

## Float

| Clase     | Valor |
|-----------|-------|
| `.fl-l`   | left  |
| `.fl-r`   | right |
| `.fl-n`   | none  |

## Clear

| Clase     | Valor |
|-----------|-------|
| `.cl-n`   | none  |
| `.cl-l`   | left  |
| `.cl-r`   | right |
| `.cl-b`   | both  |

---

## Resize

| Clase      | Valor      |
|------------|------------|
| `.rsz-n`   | none       |
| `.rsz-b`   | both       |
| `.rsz-h`   | horizontal |
| `.rsz-v`   | vertical   |

---

## Vertical align

| Clase       | Valor       |
|-------------|-------------|
| `.va-bl`    | baseline    |
| `.va-t`     | top         |
| `.va-m`     | middle      |
| `.va-b`     | bottom      |
| `.va-tb`    | text-bottom |
| `.va-tt`    | text-top    |

---

## List style

| Clase         | Valor                 |
|---------------|-----------------------|
| `.list-n`     | none                  |
| `.list-d`     | disc                  |
| `.list-c`     | circle                |
| `.list-s`     | square                |
| `.list-dc`    | decimal               |

---

## Outline

| Clase    | Valor |
|----------|-------|
| `.ol-n`  | none  |
