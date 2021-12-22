const productos = [
    {
        name: 'Volca Sample',
        category:`sintetizadores`,
        type:"DIGITAL SAMPLE SEQUENCER",
        price: 29.127,
        colors: [
            {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193645/coderhouse-react-tienda/volcasample_kny5fi.png',
                id: 1
            }
        ],
        description: `

        Intuitivo y ultra-potente secuenciador volca 
        ・ Un secuenciador divertido de usar con excelente potencial de improvisación 
        ・ Función Motion Sequence que graba y reproduce hasta 11 parámetros 
        ・ Funciones Active Step y Step Jump de paso que permiten insertar o quitar pasos  
        ・ La función swing permite generar ritmos 
        Esculpe las muestras con Analog Isolator
        ・ Potente y fantástico Analog Isolator
        ・ Efecto Reverb
        Nuevas funciones de volca sample
        ・ Graba, administra, y descarga samples desde la iOS app dedicada del volca sample
        ・ El modo Song permite interpretaciones más dinámicas
        ・ Función Reverse que reproduce las muestras a la inversa
        Cómodas funciones clásicas de la serie volca
        ・ Diseño del panel familiar e intuitivo con numerosos parámetros para editar sonidos y secuencias
        ・ Sincroniza la reproducción con otras unidades volca, electribe o DAW. 
        ・ MIDI In para disparar muestras, sincronización y cambiar parámetros desde cualquier dispositivo MIDI
        ・ Tamaño compacto, funcionamiento por baterías y altavoz incorporado para disfrutar donde quieras
    `,
        stock: 5,
        id: 1
    },{
        name: 'Volca Keys',
        category:`sintetizadores`,
        type:"ANALOGUE LOOP SYNTH",
        price: 27.302,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193676/coderhouse-react-tienda/volcakeys_ekpnch.png',
                id: 1
            }
        ],
        description: `

        El sintetizador polifónico que has estado esperando
        •    Intuitivo sintetizador analógico de tres voces
        •    La función de configuración permite crear sonidos fácilmente
        •    Efecto de retardo para mayores posibilidades sonoras
        Secuenciador en bucle
        •    El secuenciador en bucle te permite grabar frases según las tocas
        •    Usa la función Motion Sequence para modificar tus bucles
        •    Las funciones Active Step y Flux permiten añadir cambios dinámicos a tus secuencias
         
        Cómodas funciones para una enorme facilidad de uso
        •    La función de Auto-afinación evita el tono inestable, que suele ser el punto débil de un sinte analógico
        •    Tomas SYNC y MIDI IN para interpretaciones sincronizadas con múltiples unidades o con tu DAW
        •    Tamaño compacto, funcionamiento por baterías y altavoz incorporado para disfrutar donde quieras
    
    `,
        stock: 4,
        id: 2
    },{
        name: 'Volca Bass',
        category:`sintetizadores`,
        type:"ANALOGUE BASS MACHINE",
        price: 30.326,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193300/coderhouse-react-tienda/volcabass_vvmxy7.png',
                id: 1
            }
        ],
        description: `

    Potente sonido de bajo analógico
    •    Tres osciladores que generan gran variedad de sonidos de bajo
    •    Filtro analógico de nuevo diseño para una respuesta brillante
    •    Estructura sencilla con VCF, VCA, LFO y EG
    Secuenciador en bucle inspirado en la serie Electribe
    •    Secuenciador por pasos inspirado en la serie Electribe
    •    Función de portamento (Slide) indispensable para “acid” y otros tipos de música electrónica
    •    Función Active Step que genera nuevas líneas de bajo eliminando o insertando pasos
    Cómodas funciones para gran facilidad de uso
    •    La función de Auto-afinación evita el tono inestable, que suele ser el punto débil de un sinte analógico
    •    Tomas SYNC y MIDI IN para interpretaciones sincronizadas con múltiples unidades o con tu DAW
    •    Tamaño compacto, funcionamiento por baterías y altavoz incorporado para disfrutar donde quieras

`,
        stock: 0,
        id: 3
    },{
        name: 'Volca Beats',
        category:`sintetizadores`,
        type:"ANALOGUE RHYTHM MACHINE",
        price: 37.011,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193304/coderhouse-react-tienda/volcabeats_j1u9gp.png',
                id: 1
            }
        ],
        description: `

        Potentes sonidos analógicos de batería
        •    Sonidos analógicos reales creados a partir de cajas de ritmos clásicas
        •    Máxima variedad de sonido con pocos parámetros: la gran ventaja de lo analógico
        •    El motor de sonido PCM amplía las posibilidades y complementa los sonidos analógicos
        Secuenciador en bucle destilado de la serie Electribe
        •    El secuenciador por pasos de la serie Electribe
        •    La función Stutter genera disparos repetidos que cambian dramáticamente la secuencia
        •    Active Step genera nuevos ritmos eliminando o insertando pasos
        •    La función Step Jump reproduce instantáneamente el paso que estés pulsando
        Cómodas funciones para una increíble facilidad de uso
        •    Tomas SYNC y MIDI IN para interpretaciones sincronizadas con múltiples unidades o con tu DAW
        •    Tamaño compacto, funcionamiento por baterías y altavoz incorporado para disfrutar donde quieras
    
    `,
        stock: 1,
        id: 4
    },{
        name: 'Volca Kick',
        category:`sintetizadores`,
        type:"ANALOGUE KICK GENERATOR",
        price: 29.880,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193300/coderhouse-react-tienda/volcakick_wsemy7.png',
                id: 1
            }
        ],
        description: `
        El volca kick genera potentes sonidos bombo con gran presencia, usando un circuito completamente analógico. 
        Para crear esos sonidos, no utiliza una típica onda sinusoidal, sino el sonido de filtro oscilante del original MS-20. 
        El poderoso filtro Rev.1 del MS-20 auto-oscila cuando la resonancia se incrementa al máximo, y esto se utiliza para producir 
        sonidos potentes de bombo con complejos armónicos.
 
        Disponemos de parámetros simples y eficaces, permitiéndote diseñar con precisión una amplia gama de sonidos de bombo, 
        que se adapten tus gustos. Inicia el proceso de diseño de sonido usando MS-20 RESONATOR (PITCH/BEND/TIME) para controlar el tipo de tono 
        que genera la “resonancia del cuerpo” del sonido de bombo. Después usa PULSE COLOUR/LEVEL para ajustar los componentes del sonido de 
        ataque, y AMP ATTACK/DECAY para controlar intuitivamente la caída del sonido. Desde los bombos más firmes, bombos con caída prolongada, 
        y potentes bajos ‘kick bass’ cromáticos, es posible crear el sonido de bombo apropiado para cada tipo de música dance.
        
    `,
        stock: 0,
        id: 5
    },{
        name: 'Volca FM',
        category:`sintetizadores`,
        type:"DIGITAL FM SYNTHESIZER",
        price: 28.316,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193303/coderhouse-react-tienda/volcafm_bupn4r.png',
                id: 1
            }
        ],
        description: `
        volca fm es un sintetizador digital FM de tres voces que reproduce completamente el motor de sonido de un sintetizador clásico FM, 
        y también proporciona compatibilidad de programas. La intuitiva interfaz de volca facilita manipular los distintivos sonidos FM, aunque 
        no estés familiarizado con las complejidades de la síntesis FM. El secuenciador de 16 pasos, que es una de las características de volca, 
        ofrece nuevas funciones como WARP ACTIVE STEP y PATTERN CHAIN que te permiten lograr patrones de ritmo todavía más potentes.
    `,
        stock: 3,
        id: 6
    },{
        name: 'Volca mix',
        category:`audio`,
        type:"ANALOGUE PERFORMANCE MIXER",
        price: 19.027,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193302/coderhouse-react-tienda/volcamix_n0pehq.png',
                id: 1
            }
        ],
        description: `
        El volca mix es un mezclador analógico de cuatro canales con una interfaz intuitiva y muchas funciones de conectividad. 
        Proporciona dos entradas mono y una entrada estéreo, perfectas para conectar tres unidades volca. Los jacks son mini, 
        lo que te permite realizar conexiones con un solo cable mini estéreo a la salida de auriculares de cada unidad volca.
        Los volúmenes de canal utilizan faders verticales que permiten un control preciso. La ganancia se puede aumentar para ajustar el balance 
        de la mezcla, y también disponemos de botones mute. Cada canal también está equipado con un filtro LO/HI CUT que te permite controlar los 
        rangos de graves y agudos con un solo mando. Los excelentes filtros de sonido natural que esperas de tu equipo analógico te darán un 
        control total sobre el carácter de tu sonido.
        `,
        stock: 2,
        id: 7
    },{
        name: 'Volca Drum',
        category:`sintetizadores`,
        type:"DIGITAL PERCUSSION SYNTHESIZER",
        price: 36.761,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193303/coderhouse-react-tienda/volcaedrum_q3x5xp.png',
                id: 1
            }
        ],
        description: `
        Basado en una forma de onda de disparo simple, usa ‘wave folder’ y overdrive para añadir armónicos y distorsión, 
        y después un efecto resonador waveguide da vida al sonido. El motor de sintetizador DSP de seis partes ha sido diseñado con una 
        filosofía completamente diferente que las unidades rítmicas convencionales, y genera una amplia gama de sonidos diferentes e inesperados. 
        Y por supuesto, puedes reproducir esos sonidos desde el secuenciador al estilo volca.
        Añadiendo estos sonidos distintivos a tus ritmos transformarás revolucionariamente tus interpretaciones y producciones.
    `,
        stock: 3,
        id: 8
    },{
        name: 'Volca Modular',
        category:`sintetizadores`,
        type:"MICRO MODULAR SYNTHESIZER",
        price: 34.379,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193303/coderhouse-react-tienda/volcamodular_z90xz6.png',
                id: 1
            }
        ],
        description: `
        El volca modular es un sintetizador semi-modular que consta de módulos independientes de sintetizador analógico, 
        efectos digitales y un secuenciador. Cada uno de los módulos ha sido cuidadosamente seleccionado para su 
        funcionamiento independiente. Los módulos están conectados internamente por lo que es posible producir sonido 
        incluso antes de conectar los cables pin incluidos, y la ruta de señal se muestra mediante líneas blancas en el 
        panel. Las conexiones de los módulos a través de un cable pin tienen prioridad sobre las conexiones internas, 
        puenteándolas. 
    `,
        stock: 5,
        id: 9
    }
    ,{
        name: 'MS-20 mini',
        category:`sintetizadores`,
        type:"MONOFONIC SYNTHESIZER",
        price: 104.771,
        colors: [
            {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193310/coderhouse-react-tienda/ms-20mini_xxyrl2.png',
                id: 1
            },
            {
                text:'white monotone',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640195258/coderhouse-react-tienda/ms-20mini-color-whitemonotone_fyba4d.png',
                id: 2
            }
        ],
        description: `
        El KORG MS-20 mini, que reproduce fielmente el clásico MS-20 al 86% del tamaño original, está ahora disponible como un modelo de 
        edición limitada en color blanco. Este modelo es el primer color nuevo que aparece en los casi 40 años desde que la unidad original 
        salió a la venta en 1978. Basado en el negro, que es emblemático de la presencia distintiva del MS-20, este nuevo modelo ofrece un 
        blanco sólido tanto en el panel frontal como en los mandos, conservando fielmente la circuitería, conectores MIDI y USB MIDI del 
        MS-20 mini en negro. Combinando una frescura totalmente nueva junto con un toque vintage, tal como corresponde al MS-20 como el 
        sintetizador semi-modular original, ¡este modelo de edición limitada representa una fantástica forma de disfrutar de los clásicos 
        sonidos del MS-20 en cualquier equipo!
    `,
        stock: 2,
        id: 10
    }
    ,{
        name: 'Monotron DELAY',
        category:`sintetizadores`,
        type:"ANALOGUE RIBBON SYNTHESIZER",
        price: 8.527,
        colors: [
            {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193309/coderhouse-react-tienda/monotrondelay_byq0ue.png',
                id: 1
            }
                ],
        description: `

        Retardo Espacial que ofrece ecos de estilo analógico
        Nuevo LFO con selección de ondas triangular o cuadrada
        Teclado controlador de cinta de amplio rango
        Filtro Original Analógico (VCF) tomado de los clásicos MS-10 & MS-20
        La entrada Aux te permite aplicar el filtro a cualquier fuente de audio
        Altavoz incorporado y alimentación por baterías para llevar tu sonido analógico allá donde vayas
        Salida de auriculares para uso en privado
    
    `,
        stock: 16,
        id: 11
    }
    ,{
        name: 'Monotron DUO',
        category:`sintetizadores`,
        type:"ANALOGUE RIBBON SYNTHESIZER",
        price: 8.845,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193309/coderhouse-react-tienda/monotronduo_hyuiwy.png',
                id: 1
            }
        ],
        description: `

        Dos osciladores analógicos (VCO) con afinación individual
        Circuito X-MOD basado en el clásico Korg Mono/Poly
        Teclado controlador de cinta (Ribbon) con selector de Escala
        Filtro Original Analógico (VCF) tomado de los clásicos MS-10 & MS-20
        La entrada Aux te permite aplicar el filtro a cualquier fuente de audio
        Altavoz incorporado y alimentación por baterías para llevar tu sonido analógico allá donde vayas
        Salida de auriculares para uso en privado
    
    `,
        stock: 15,
        id: 12
    }
    ,{
        name: 'Monologue',
        category:`sintetizadores`,
        type:"MONOPHONIC ANALOGUE SYNTHESIZER",
        price: 66.759,
        colors:[
            {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640194337/coderhouse-react-tienda/monologue-color-original_jxm7mc.png',
                id: 1
            },
            {
                text:'gold',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640194248/coderhouse-react-tienda/monologue-color-gold_zmouah.png',
                id: 2
            },
            {
                text:'dark blue',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640194246/coderhouse-react-tienda/monologue-color-darkblue_ezduw1.png',
                id: 3
            },
            {
                text:'black',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640194241/coderhouse-react-tienda/monologue-color-black_xkcfxn.png',
                id: 4
            },
            {
                text:'red',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640194250/coderhouse-react-tienda/monologue-color-red_xwt3pi.png',
                id: 5
            }
        ],
        description: `

        Sintetizador analógico con una estructura de síntesis totalmente nueva, optimizada para producir increíbles sonidos monofónicos y secuencias
        Totalmente programable con 100 memorias de programa (80 presets incluidos)
        Secuenciador de 16 pasos con la aclamada tecnología ‘motion sequence’ para lograr mayor movimiento en tus sonidos
        La Microafinación te permite crear escalas libremente y tonalidades alternativas
        La función de osciloscopio permite visualizar la forma de onda en tiempo real
        Alimentación por baterías para mayor portabilidad
        Resistente y elegante, con panel superior de aluminio, potenciómetros montados en el chasis, mandos recubiertos en goma y panel posterior de madera auténtica
        MIDI, USB-MIDI y Audio Sync para todo tipo de conectividad tanto en el estudio como en directo, incluyendo sincronización directa con minilogue, SQ1, volca, electribe y más
        Cinco variaciones de color que destacarán en el escenario o en el estudio
    
    `,
        stock: 6,
        id: 13
    }
    ,{
        name: 'Minilogue',
        category:`sintetizadores`,
        type:"PHOLYPHONIC ANALOGUE SYNTHESIZER",
        price: 88.385,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193306/coderhouse-react-tienda/minilogue_cir8qq.png',
                id: 1
            }
        ],
        description: `

        Potente y flexible sintetizador polifónico de cuatro voces
        Totalmente programable, con 200 memorias de Programa (100 sonidos incluidos)
        Modos de Voz que permiten configurar las cuatro voces de forma flexible
        Secuenciador polifónico automatizable de 16-pasos para notas y movimientos
        Función de Osciloscopio que muestra la forma de onda visualmente
        Elegante y resistente panel superior de aluminio, potenciómetros montados en el chasis, botones recubiertos de goma y panel posterior de madera auténtica
        MIDI, USB-MIDI y Audio Sync para la máxima conectividad en estudio y directo, incluyendo sincronización directa con SQ1, volca, electribe, y más
    
    `,
        stock: 4,
        id: 14
    }
    ,{
        name: 'Minilogue xd',
        category:`sintetizadores`,
        type:"PHOLYPHONIC ANALOGUE SYNTHESIZER",
        price: 114.535,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193307/coderhouse-react-tienda/miniloguexd_gm75rl.png',
                id: 1
            }
        ],
        description: `

        Síntesis analógica con polifonía de cuatro voces. El circuito de sintetizador analógico de minilogue, cuyo genuino sonido analógico tuvo un enorme impacto
        en el mundo del sintetizador, ha sido desarrollado aún más para el minilogue xd.
        La estructura de voz del minilogue xd consta de 2VCO + MULTI-MOTOR, 1VCF, 2EG, 1VCA y 1LFO. Además de los circuitos característicos de esta serie, 
        tales como cambio gradual de onda para modificar los armónicos del oscilador y conmutador sincro/anillo, también tenemos modulación cruzada, un robusto 
        filtro de dos polos, y un conmutador drive que añade pegada y cuerpo a la señal del filtro de minilogue xd. Cada parámetro se ha ajustado en detalle basándonos 
        en lo que músicos desean de su sintetizador. La gama de sonidos va desde cálidos pads típicamente analógicos hasta gruesos bajos e impactantes sonidos solistas, 
        para dar respuesta a cada situación musical.
        Por supuesto, los programas que crees también pueden guardarse en la unidad. De fábrica, minilogue xD viene cargado con 200 presets, y puedes guardar un total de 
        500 programas.

        `,
        stock: 3,
        id: 15
    }
    ,{
        name: 'microKORG',
        category:`sintetizadores`,
        type:"SYNTHESIZER/VOCODER",
        price: 68.914,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193305/coderhouse-react-tienda/microkorg_sij57h.webp',
                id: 1
            }
        ],
        description: `

        Un auténtico sintetizador con un motor de sonido de modelado analógico
        Potente sección de oscilador
        Detallada sección de filtro
        Una sección de Amplificador con gran presencia y distorsión
        EG y LFO añaden un sutil movimiento sonoro
        Conexiones Virtuales para una edición de sonido todavía más sofisticada
        Versátil y distintivo vocoder
        128 programas para uso inmediato
        Una amplia gama de Efectos
        Arpegiador ajustable
        Procesa una señal externa de audio con las entradas de audio
        Funcionalidad como controlador MIDI
        Controles diseñados para fácil acceso
        Un distintivo diseño y mini-micro incluido
    
    `,
        stock: 2,
        id: 16
    }
    ,{
        name: 'microKORG S',
        category:`sintetizadores`,
        type:"SYNTHESIZER/VOCODER",
        price: 78.830,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193307/coderhouse-react-tienda/microkorgS_iozla9.png',
                id: 1
            }
        ],
        description: `
        El nuevo microKORG S incorpora un sistema de altavoces 2 + 1 con una potencia que excede en mucho a su tamaño. Su cuerpo ofrece un elegante diseño en blanco, 
        e incorpora nuevos presets que representan los sonidos de una nueva generación. Dentro del  sofisticado exterior de microKORG S encontramos un motor de sonido 
        que emana una enorme fuerza y ofrece sonidos para cualquier aplicación musical.
        `,
        stock: 16,
        id: 17
    }
    ,{
        name: 'microKORG XL +',
        category:`sintetizadores`,
        type:"SYNTHESIZER/VOCODER",
        price: 78.824,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193308/coderhouse-react-tienda/microkorgxl_rssnch.png',
                id: 1
            }
        ],
        description: `

        Aún más sonidos clásicos, incluyendo el piano KORG SGproX, el M1 y órganos VOX y conocidos intrumentos de "Cinta".
        El nuevo selector de género de programa se adapta a las necesidades actuales.
        Nuevo diseño a la vez que nostálgico: "neo clásico" en negro.
        Incorpora la tecnología MMT: modelado analógico avanzado de Korg.
        Función de vocoder con micrófono flexo incluido.
        El poderoso motor de efectos Kaoss – la clase de efectos que esperas de Korg
        Mini-teclado Natural Touch, exclusivo de Korg, diseñado con un énfasis en la interpretación.
        Funcionamiento a baterías para mayor portabilidad.
    
    `,
        stock: 2,
        id: 18
    }
    ,{
        name: 'kingKORG',
        category:`sintetizadores`,
        type:"SYNTHESIZER",
        price: 159.900,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193305/coderhouse-react-tienda/kingkorg_rl6ydt.png',
                id: 1
            }
        ],
        description: `

        Un completo sintetizador de modelado analógico, con 61 teclas, diseñado para interpretación en directo
        Potentes osciladores fáciles de entender para el principiante a la vez que ofrecen todo lo que necesita el experto
        Filtros de Modelado que reproducen el sonido de los sintes clásicos
        Tres secciones de efectos master (cada uno con seis tipos de efectos) añaden el toque final a tu sonido
        El circuito de saturación de válvula añade ricos armónicos y una potente distorsión
        Nuevo diseño de panel que permite una programación intuitiva
        Salida CV/GATE OUT que te permite controlar un Korg MS-20 o monotribe
        Soporta software de librería que te permite gestionar los programas
    
    `,
        stock: 0,
        id: 19
    },
    {
        name:`Krk Classic 5`,
        category:`sonido`,
        type:`MONITORES POTENCIADOS`,
        price:65.999,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193308/coderhouse-react-tienda/krkclassic5_iyvtse.png',
                id: 1
            }
        ],
        description:`
        Tipo: Biamplificado
        Respuesta de frecuencia: 45Hz - 35kHz
        Dimensiones: 24,6 x 18,8 x 28,4 Cm
        Peso: 5,9 Kg
        Parlante: 5
        Potencia: 50 watts
        Entradas: XLR, RCA, 1/4
        Controles: Hf Adjust, Lf adjust, Volume`,
        stock:2,
        id:20
    },
    {
        name:`Mackie Cr3-xbt`,
        category:`sonido`,
        type:`MONITORES ACTIVOS MULTIMEDIA`,
        price:`30.435`,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193305/coderhouse-react-tienda/mackiecr3xbt_sb6h6r.png',
                id: 1
            }
        ],
        description:`
        Los monitores multimedia Mackie CR3-XBT ponen sonido 
        calidad estudio sobre tu escritorio a un gran precio. 
        Mackie ha ganado su reputación en monitoreo calidad 
        estudio a través de los años, y los monitores multimedia 
        CR3-XBT son igual de aptos para producción multimedia 
        como para videojuegos y escucha casual. Los músicos 
        aprecian la conveniente salida para auriculares en el 
        panel frontal para sesiones privadas, mientras que sus 
        entradas están listas para aceptar señal de tu computadora, 
        interfaz de audio, o dispositivo portátil. Además, la 
        conectividad Bluetooth interna significa que puedas incluso 
        enviar audio de manera remota. Ya sea que estas armando un 
        estudio de edición, o simplemente buscando mejorar tu 
        experiencia de audio de escritorio, te van a impresionar los 
        monitores multimedia Mackie CR3-XBT. Incluye código para 
        descargar Pro Tools First y colección de 23 plugins`,
        stock:4,
        id:21
    },
    {
        name:`RE-20`,
        category:`efectos`,
        type:`SPACE ECHO`,
        price:`12.000`,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193308/coderhouse-react-tienda/re-20_fkekny.jpg',
                id: 1
            }
        ],
        description:`
        Increíble simulación del famoso RE-201 de Roland, con el tono analógico y espacioso del Space Echo original
        Modelado fiel de la saturación de sonido del cabezal magnético y del flutter de cinta del RE-201
        El pedal de entrada de pulsación permite ajustar el tiempo de retardo con el pie
        Tiempo de retardo superior al RE-201 original
        Parámetros de control como REPEAT RATE, INTENSITY y muchos más con el pedal de expresión.
        Mando MODE SELECTOR con 12 ubicaciones, como el Space Echo original
    `,
        stock:2,
        id:22
    },
    {
        name:`DD-8 `,
        category:`efectos`,
        type:`DIGITAL DELAY`,
        price:10.000,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193304/coderhouse-react-tienda/dd-8_xnm98j.webp',
                id: 1
            }
        ],
        description:`
        Boss Delay más extenso de la serie compacta, ofrece 11 modos, así como una función de Loop
        controles: Nivel, Retroalimentación, Tiempo, Modo
        Modos de efecto: 10 (GLT (delay rítmico), warp, mod, shim, +rv (reverb y delay), reverse, warm, tape, standard y analog)
        Looper de 40 segundos con función de guardar, overdub y función con tres pedales vía conmutadores externos
        Tiempo máximo de delay de 10 segundos
        Interruptor para elegir si la cola del delay continúa o se para cuando se omite el efecto
    `,
        stock:3,
        id:23
    },
    {
        name:`Cable interpedal`,
        category:`accesorios`,
        type:`CABLES`,
        price:300,
        colors: [
                        {
                text:'original',
                img:'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640193303/coderhouse-react-tienda/cable-interpedal_s9ylmi.png',
                id: 1
            }
        ],
        description:
    `
        Ernie Ball Interpedal Cable 15.24 cm.        
        Los cables de conexión Ernie Ball cuentan con un diseño de alta 
        calidad fabricado con componentes superiores que están hechos 
        para durar. Los conductores dobles brindan un tono claro 
        confiable con agudos nítidos, medios ajustados y armónicos ricos. 
        Múltiples materiales de protección preservan la señal con bajo ruido 
        de manejo, y el exterior de la chaqueta de PVC duradera asegura un 
        rendimiento duradero. Longitud del cable 6 pulgadas (15,24 cm).
        `,
        stock:13,
        id:24
    }
    // {
    //     name:``,
    //     category:``,
    //     type:``,
    //     price:``,
    //     photo:``,
    //     description:``,
    //     stock:``,
    //     id:``
    // }
    // {
    //     name:``,
    //     category:``,
    //     type:``,
    //     price:``,
    //     photo:``,
    //     description:``,
    //     stock:``,
    //     id:``
    // }
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },2000)
})
