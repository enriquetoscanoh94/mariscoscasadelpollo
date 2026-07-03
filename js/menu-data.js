// ============================================================
// Menú — Mariscos Casa del Pollo
// Fuente: menú físico del restaurante (precios reales).
//
// Estructura:
//   categoría: { id, name: {es,en}, items: [...] }
//   platillo:  { id, name, price }            → precio único
//              { id, name, variants: [...] }  → varias presentaciones
//   Campos opcionales por platillo:
//     desc: {es,en}      → solo si el menú físico lista ingredientes
//     img: 'id'          → cuando varios platillos comparten foto
//     badge: {es,en}     → aviso especial (ej. solo fines de semana)
//     priceNote: {es,en} → nota junto al precio (ej. "c/u")
//   El nombre del platillo NUNCA se traduce; la descripción sí.
//
// Para agregar un platillo solo se añade un objeto aquí
// y su imagen en assets/img/menu/<id>.webp — nada más.
// ============================================================

const MENU = [
  {
    id: 'ceviches-y-tostadas',
    name: { es: 'Ceviches y Tostadas', en: 'Ceviches & Tostadas' },
    items: [
      {
        id: 'aguachile',
        name: 'Aguachile',
        price: 21.99,
        desc: {
          es: 'Camarón curtido, pepino, aguacate y salsa.',
          en: 'Lime-cured shrimp, cucumber, avocado and salsa.'
        }
      },
      {
        id: 'ceviche-de-pescado',
        name: 'Ceviche de Pescado',
        price: 18.99,
        desc: {
          es: 'Tomate, cebolla, cilantro, aguacate y salsa.',
          en: 'Tomato, onion, cilantro, avocado and salsa.'
        }
      },
      {
        id: 'ceviche-de-camaron',
        name: 'Ceviche de Camarón',
        price: 19.99,
        desc: {
          es: 'Tomate, cebolla, cilantro, aguacate y salsa.',
          en: 'Tomato, onion, cilantro, avocado and salsa.'
        }
      },
      {
        id: 'ceviche-campechano',
        name: 'Ceviche Campechano',
        price: 22.99,
        desc: {
          es: 'Camarón curtido, camarón cocido, jaiba, pulpo, pescado, pepino y pico de gallo.',
          en: 'Cured shrimp, cooked shrimp, crab, octopus, fish, cucumber and pico de gallo.'
        }
      },
      {
        id: 'ceviche-carretero',
        name: 'Ceviche Carretero',
        price: 27.99,
        desc: {
          es: 'Pescado, camarón curtido, cebolla, cilantro y chile serrano.',
          en: 'Fish, cured shrimp, onion, cilantro and serrano pepper.'
        }
      },
      { id: 'tostada-de-aguachile', name: 'Tostada de Aguachile', price: 10.99 },
      { id: 'tostada-de-camaron-cocido', name: 'Tostada de Camarón Cocido', price: 10.99 },
      { id: 'tostada-de-camaron-curtido', name: 'Tostada de Camarón Curtido', price: 10.99 },
      { id: 'tostada-de-ceviche-de-pescado', name: 'Tostada de Ceviche de Pescado', price: 8.99 },
      { id: 'tostada-de-ceviche-carretero', name: 'Tostada de Ceviche Carretero', price: 11.99 },
      {
        id: 'tostada-mixta',
        name: 'Tostada Mixta',
        price: 11.99,
        desc: {
          es: 'Camarón cocido, pulpo, jaiba, pico de gallo y pepino.',
          en: 'Cooked shrimp, octopus, crab, pico de gallo and cucumber.'
        }
      }
    ]
  },
  {
    id: 'cocteles-y-botanas',
    name: { es: 'Cocteles y Botanas de Mariscos', en: 'Seafood Cocktails & Botanas' },
    items: [
      {
        id: 'torre-marisquera',
        name: 'Torre Marisquera',
        price: 30.99,
        desc: {
          es: 'Camarón cocido, pulpo, jaiba, aguacate, pepino y cebolla.',
          en: 'Cooked shrimp, octopus, crab, avocado, cucumber and onion.'
        }
      },
      {
        id: 'torre-marisquera-con-ostiones',
        name: 'Torre Marisquera con Ostiones',
        price: 38.99,
        desc: {
          es: '3 ostiones, camarón cocido, pulpo, jaiba, aguacate, pepino y cebolla.',
          en: '3 oysters, cooked shrimp, octopus, crab, avocado, cucumber and onion.'
        }
      },
      {
        id: 'botana-seca',
        name: 'Botana Seca',
        price: 30.99,
        desc: {
          es: 'Camarón cocido, camarón curtido, pepino y cebolla.',
          en: 'Cooked shrimp, cured shrimp, cucumber and onion.'
        }
      },
      {
        id: 'botana-chacalosa',
        name: 'Botana Chacalosa',
        price: 39.99,
        desc: {
          es: 'Camarón curtido, camarón cocido, pulpo, jaiba, pescado y pepino.',
          en: 'Cured shrimp, cooked shrimp, octopus, crab, fish and cucumber.'
        }
      },
      {
        id: 'botana-chacalosa-con-oyster-shot',
        name: 'Botana Chacalosa con Oyster Shot',
        price: 49.99,
        desc: {
          es: '4 shots de ostión y camarón preparados, camarón curtido, camarón cocido, pulpo, jaiba, pescado y pepino.',
          en: '4 prepared oyster-and-shrimp shots, cured shrimp, cooked shrimp, octopus, crab, fish and cucumber.'
        }
      },
      {
        id: 'ostiones',
        name: 'Ostiones',
        variants: [
          { label: { es: 'Docena', en: 'Dozen' }, price: 25.99 },
          { label: { es: 'Media docena', en: 'Half dozen' }, price: 14.99 }
        ],
        desc: { es: 'Limón y salsa.', en: 'Lime and salsa.' }
      },
      {
        id: 'ostiones-preparados',
        name: 'Ostiones Preparados',
        variants: [
          { label: { es: 'Docena', en: 'Dozen' }, price: 30.99 },
          { label: { es: 'Media docena', en: 'Half dozen' }, price: 18.99 }
        ],
        desc: {
          es: 'Ceviche de pescado, limón y salsa.',
          en: 'Fish ceviche, lime and salsa.'
        }
      },
      {
        id: 'oyster-shots',
        name: 'Oyster Shots · Shot de Ostión',
        price: 17.99,
        desc: {
          es: '6 ostiones y camarones preparados.',
          en: '6 prepared oysters and shrimp.'
        }
      },
      {
        id: 'coctel-botanero',
        name: 'Coctel Botanero',
        price: 26.99,
        desc: {
          es: 'Camarón cocido, camarón curtido y ceviche de pescado.',
          en: 'Cooked shrimp, cured shrimp and fish ceviche.'
        }
      },
      {
        id: 'coctel-botanero-con-ostiones',
        name: 'Coctel Botanero con Ostiones',
        price: 32.99,
        desc: {
          es: '3 ostiones, camarón cocido, camarón curtido y ceviche de pescado.',
          en: '3 oysters, cooked shrimp, cured shrimp and fish ceviche.'
        }
      },
      {
        id: 'campechana',
        name: 'Campechana',
        price: 20.99,
        desc: {
          es: 'Camarón cocido, pulpo y jaiba.',
          en: 'Cooked shrimp, octopus and crab.'
        }
      },
      {
        id: 'coctel-de-camarones',
        name: 'Coctel de Camarones',
        price: 17.99,
        desc: {
          es: 'Camarón cocido, pico de gallo y pepino.',
          en: 'Cooked shrimp, pico de gallo and cucumber.'
        }
      },
      {
        id: 'coctel-de-camarones-ahogados',
        name: 'Coctel de Camarones Ahogados',
        price: 17.99,
        desc: {
          es: 'Camarón curtido en limón, pico de gallo y pepino.',
          en: 'Shrimp cured in lime juice, pico de gallo and cucumber.'
        }
      }
    ]
  },
  {
    id: 'camarones',
    name: { es: 'Camarones', en: 'Shrimp' },
    items: [
      {
        id: 'camarones-empanizados',
        name: 'Camarones Empanizados',
        price: 17.99,
        desc: {
          es: 'Arroz, papas fritas, ensalada y tortillas.',
          en: 'Rice, french fries, salad and tortillas.'
        }
      },
      {
        id: 'camarones-momia',
        name: 'Camarones Momia',
        price: 17.99,
        desc: {
          es: 'Envueltos en tocino. Arroz, papas fritas, ensalada y tortillas.',
          en: 'Bacon-wrapped. Rice, french fries, salad and tortillas.'
        }
      },
      {
        id: 'camarones-bucaneros',
        name: 'Camarones Bucaneros',
        price: 26.99,
        desc: {
          es: 'Camarón en salsa picosa, pepino, tomate y cebolla.',
          en: 'Shrimp in spicy salsa, cucumber, tomato and onion.'
        }
      },
      {
        id: 'camarones-rancheros',
        name: 'Camarones Rancheros',
        price: 17.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'camarones-a-la-diabla',
        name: 'Camarones a la Diabla',
        price: 17.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'camarones-al-mojo-de-ajo',
        name: 'Camarones al Mojo de Ajo',
        price: 17.99,
        desc: {
          es: 'Arroz, papas fritas, ensalada y tortillas.',
          en: 'Rice, french fries, salad and tortillas.'
        }
      },
      {
        id: 'tacos-gobernador',
        name: 'Tacos Gobernador',
        price: 16.99,
        desc: {
          es: '3 tacos de camarón cocido, queso, aguacate y cebolla.',
          en: '3 tacos with cooked shrimp, cheese, avocado and onion.'
        }
      },
      {
        id: 'empanadas-de-camaron',
        name: 'Empanadas de Camarón',
        price: 15.99,
        desc: {
          es: '3 empanadas, ensalada y salsa.',
          en: '3 empanadas, salad and salsa.'
        }
      }
    ]
  },
  {
    id: 'caldos',
    name: { es: 'Caldos', en: 'Soups' },
    items: [
      {
        id: 'caldo-siete-mares',
        name: 'Caldo Siete Mares',
        price: 21.99,
        desc: {
          es: 'Camarón, jaiba, pescado, pulpo, almejas, calamar y verduras.',
          en: 'Shrimp, crab, fish, octopus, clams, squid and vegetables.'
        }
      },
      {
        id: 'caldo-de-camaron',
        name: 'Caldo de Camarón',
        price: 17.99,
        desc: {
          es: 'Calabazas, zanahoria y cebolla.',
          en: 'Squash, carrots and onion.'
        }
      },
      {
        id: 'caldo-de-albondigas-de-camaron',
        name: 'Caldo de Albóndigas de Camarón',
        price: 17.99,
        desc: {
          es: 'Calabazas, zanahoria y cebolla.',
          en: 'Squash, carrots and onion.'
        }
      },
      {
        id: 'menudo',
        name: 'Menudo',
        price: 15.99,
        badge: { es: 'Sábados y Domingos', en: 'Saturdays & Sundays' }
      }
    ]
  },
  {
    id: 'molcajetes-y-parrilladas',
    name: { es: 'Molcajetes y Parrilladas', en: 'Molcajetes & Grill Platters' },
    items: [
      {
        id: 'molcajete-de-carnes',
        name: 'Molcajete de Carnes',
        price: 30.99,
        desc: {
          es: 'Asada, pollo, milanesa, puerco, quesadilla, frijoles, nopales, cebollines y salsa.',
          en: 'Asada, chicken, milanesa, pork, quesadilla, beans, cactus, green onions and salsa.'
        }
      },
      {
        id: 'molcajete-de-carnes-y-camarones',
        name: 'Molcajete de Carnes y Camarones',
        price: 34.99,
        desc: {
          es: 'Asada, pollo, milanesa, puerco, camarones, quesadilla, frijoles, nopales, cebollines y salsa.',
          en: 'Asada, chicken, milanesa, pork, shrimp, quesadilla, beans, cactus, green onions and salsa.'
        }
      },
      {
        id: 'molcajete-casa-del-pollo',
        name: 'Molcajete Casa del Pollo',
        price: 34.99,
        desc: {
          es: 'Camarón, pulpo, jaiba, camarones empanizados, patas de jaiba, empanada y almejas.',
          en: 'Shrimp, octopus, crab, breaded shrimp, crab legs, empanada and clams.'
        }
      },
      {
        id: 'molcajete-de-mariscos',
        name: 'Molcajete de Mariscos',
        price: 34.99,
        desc: {
          es: 'Camarón, pulpo, jaiba, camarones empanizados, camarones momia, filete de pescado y salsa ranchera.',
          en: 'Shrimp, octopus, crab, breaded shrimp, bacon-wrapped shrimp, fish fillet and ranchera sauce.'
        }
      },
      {
        id: 'parrillada-de-mariscos',
        name: 'Parrillada de Mariscos',
        variants: [
          { label: { es: 'Completa', en: 'Full' }, price: 75.99 },
          { label: { es: 'Media', en: 'Half' }, price: 40.99 }
        ],
        desc: {
          es: 'Mojarra, filete empanizado, camarones bucaneros, camarones empanizados, 3 empanadas de camarón, papas fritas, ensalada y tortillas.',
          en: 'Whole tilapia, breaded fillet, bucaneros shrimp, breaded shrimp, 3 shrimp empanadas, french fries, salad and tortillas.'
        }
      },
      {
        id: 'parrillada-de-carnes',
        name: 'Parrillada de Carnes',
        variants: [
          { label: { es: 'Completa', en: 'Full' }, price: 59.99 },
          { label: { es: 'Media', en: 'Half' }, price: 30.99 }
        ],
        desc: {
          es: 'Carne asada, carnitas, milanesa, arroz, frijoles y tortillas.',
          en: 'Carne asada, carnitas, milanesa, rice, beans and tortillas.'
        }
      },
      {
        id: 'molcajete-levantamuertos',
        name: 'Molcajete Levantamuertos',
        price: 26.99,
        desc: {
          es: 'Camarón en salsa picosa, pepino, tomate y cebolla.',
          en: 'Shrimp in spicy salsa, cucumber, tomato and onion.'
        }
      },
      {
        id: 'molcajete-el-patron',
        name: 'Molcajete El Patrón',
        price: 34.99,
        desc: {
          es: 'Camarón cocido, camarón curtido, pulpo, pepino y cebolla.',
          en: 'Cooked shrimp, cured shrimp, octopus, cucumber and onion.'
        }
      },
      {
        id: 'super-molcajete',
        name: 'Super Molcajete',
        price: 36.99,
        desc: {
          es: 'Camarón cocido, pulpo, jaiba, pescado y camarón curtido en limón.',
          en: 'Cooked shrimp, octopus, crab, fish and lime-cured shrimp.'
        }
      }
    ]
  },
  {
    id: 'mojarras-y-filetes',
    name: { es: 'Mojarras y Filetes', en: 'Whole Fish & Fillets' },
    items: [
      {
        id: 'mojarra-frita',
        name: 'Mojarra Frita',
        price: 15.99,
        desc: {
          es: 'Arroz, papas fritas, ensalada y tortillas.',
          en: 'Rice, french fries, salad and tortillas.'
        }
      },
      { id: 'mojarra-a-la-diabla', name: 'Mojarra a la Diabla', price: 18.99 },
      {
        id: 'mojarra-al-mojo-de-ajo',
        name: 'Mojarra al Mojo de Ajo',
        price: 18.99,
        desc: {
          es: 'Arroz, papas fritas, ensalada y tortillas.',
          en: 'Rice, french fries, salad and tortillas.'
        }
      },
      {
        id: 'filete-de-pescado-empanizado',
        name: 'Filete de Pescado Empanizado',
        price: 17.99,
        desc: {
          es: 'Arroz, papas fritas, ensalada y tortillas.',
          en: 'Rice, french fries, salad and tortillas.'
        }
      },
      {
        id: 'filete-de-pescado-a-la-plancha',
        name: 'Filete de Pescado a la Plancha',
        price: 17.99,
        desc: {
          es: 'Arroz, papas fritas, ensalada y tortillas.',
          en: 'Rice, french fries, salad and tortillas.'
        }
      }
    ]
  },
  {
    id: 'pollo-y-fajitas',
    name: { es: 'Pollo y Fajitas', en: 'Chicken & Fajitas' },
    items: [
      {
        id: 'cuarto-de-pollo',
        name: '¼ de Pollo',
        price: 11.99,
        desc: {
          es: 'Arroz, frijoles, ensalada y tortillas.',
          en: 'Rice, beans, salad and tortillas.'
        }
      },
      {
        id: 'medio-pollo',
        name: '½ Pollo',
        price: 14.99,
        desc: {
          es: 'Arroz, frijoles, ensalada y tortillas.',
          en: 'Rice, beans, salad and tortillas.'
        }
      },
      {
        id: 'pollo-entero',
        name: 'Pollo Entero',
        price: 24.99,
        desc: {
          es: 'Arroz, frijoles, ensalada y tortillas.',
          en: 'Rice, beans, salad and tortillas.'
        }
      },
      {
        id: 'flautas-de-pollo',
        name: 'Flautas de Pollo',
        price: 14.99,
        desc: {
          es: 'Arroz, frijoles, guacamole y crema.',
          en: 'Rice, beans, guacamole and sour cream.'
        }
      },
      {
        id: 'ensalada-de-pollo',
        name: 'Ensalada de Pollo',
        price: 12.99,
        desc: {
          es: 'Pollo asado, lechuga, guacamole, queso y frijoles de la olla.',
          en: 'Grilled chicken, lettuce, guacamole, cheese and pot beans.'
        }
      },
      {
        id: 'platillo-botanero',
        name: 'Platillo Botanero',
        price: 30.99,
        desc: {
          es: 'Flautas doradas, enchiladas, carnitas, bistec, guacamole, crema, arroz y frijoles.',
          en: 'Golden flautas, enchiladas, carnitas, steak, guacamole, sour cream, rice and beans.'
        }
      },
      {
        id: 'fajitas-de-pollo',
        name: 'Fajitas de Pollo',
        img: 'fajitas',
        price: 18.99,
        desc: {
          es: 'Pollo, chile campana, cebolla, arroz, frijoles y tortillas.',
          en: 'Chicken, bell pepper, onion, rice, beans and tortillas.'
        }
      },
      {
        id: 'fajitas-de-camaron',
        name: 'Fajitas de Camarón',
        img: 'fajitas',
        price: 20.99,
        desc: {
          es: 'Camarón, chile campana, cebolla, arroz, frijoles y tortillas.',
          en: 'Shrimp, bell pepper, onion, rice, beans and tortillas.'
        }
      },
      {
        id: 'fajitas-mixtas',
        name: 'Fajitas Mixtas',
        img: 'fajitas',
        price: 22.99,
        desc: {
          es: 'Camarón, carne, pollo, chile campana, cebolla, arroz, frijoles y tortillas.',
          en: 'Shrimp, beef, chicken, bell pepper, onion, rice, beans and tortillas.'
        }
      },
      {
        id: 'mar-y-tierra',
        name: 'Mar y Tierra',
        price: 21.99,
        desc: {
          es: 'Carne, camarón, chile campana, cebolla, arroz, frijoles y tortillas.',
          en: 'Beef, shrimp, bell pepper, onion, rice, beans and tortillas.'
        }
      },
      {
        id: 'mariscada',
        name: 'Mariscada',
        variants: [
          { label: { es: 'Completa', en: 'Full' }, price: 69.99 },
          { label: { es: 'Media', en: 'Half' }, price: 38.99 }
        ],
        desc: {
          es: 'Camarón, pulpo, jaiba, filete de pescado, almejas y patas de jaiba.',
          en: 'Shrimp, octopus, crab, fish fillet, clams and crab legs.'
        }
      },
      {
        id: 'botana-casa-del-pollo',
        name: 'Botana Casa del Pollo',
        variants: [
          { label: { es: 'Completa', en: 'Full' }, price: 59.99 },
          { label: { es: 'Media', en: 'Half' }, price: 29.99 }
        ],
        desc: {
          es: 'Camarón ranchero, carne asada, pollo, arroz, frijoles y tortillas.',
          en: 'Ranchero shrimp, carne asada, chicken, rice, beans and tortillas.'
        }
      }
    ]
  },
  {
    id: 'carnes-y-platillos',
    name: { es: 'Carnes y Platillos', en: 'Meats & Plates' },
    items: [
      {
        id: 'carne-asada',
        name: 'Carne Asada',
        price: 20.99,
        desc: {
          es: 'Arroz, frijoles, guacamole, ensalada y tortillas.',
          en: 'Rice, beans, guacamole, salad and tortillas.'
        }
      },
      {
        id: 'bistec-ranchero',
        name: 'Bistec Ranchero',
        price: 20.99,
        desc: {
          es: 'Arroz, frijoles, cebolla, salsa y tortillas.',
          en: 'Rice, beans, onion, salsa and tortillas.'
        }
      },
      {
        id: 'plato-de-carnitas',
        name: 'Plato de Carnitas',
        price: 19.99,
        desc: {
          es: 'Arroz, frijoles, ensalada y tortillas.',
          en: 'Rice, beans, salad and tortillas.'
        }
      },
      {
        id: 'alambres-mixtos',
        name: 'Alambres Mixtos',
        price: 20.99,
        desc: {
          es: 'Asada, pastor o carnitas. Arroz, frijoles, queso, chile campana y cebolla.',
          en: 'Asada, pastor or carnitas. Rice, beans, cheese, bell pepper and onion.'
        }
      },
      {
        id: 'enchiladas-a-la-plancha',
        name: 'Enchiladas a la Plancha',
        price: 15.99,
        desc: {
          es: '4 enchiladas, verdura, repollo, queso, cebolla y ¼ de pollo.',
          en: '4 enchiladas, vegetables, cabbage, cheese, onion and a quarter chicken.'
        }
      },
      {
        id: 'enchiladas-de-asada-pollo-o-queso',
        name: 'Enchiladas de Asada, Pollo o Queso',
        price: 14.99,
        desc: {
          es: '2 enchiladas, arroz, frijoles y ensalada.',
          en: '2 enchiladas, rice, beans and salad.'
        }
      }
    ]
  },
  {
    id: 'birria-y-antojitos',
    name: { es: 'Birria y Antojitos', en: 'Birria & Antojitos' },
    items: [
      { id: 'birria-de-res', name: 'Birria de Res', price: 15.99 },
      {
        id: 'plato-de-birria-de-res',
        name: 'Plato de Birria de Res',
        price: 17.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'queso-birria-tacos',
        name: 'Queso Birria Tacos',
        price: 16.99,
        desc: {
          es: '3 tacos, queso, birria, cebolla, cilantro y consomé.',
          en: '3 tacos, cheese, birria, onion, cilantro and consommé.'
        }
      },
      {
        id: 'torta-birria',
        name: 'Torta Birria',
        price: 12.99,
        desc: {
          es: 'Birria, queso, frijoles, cebolla, cilantro y consomé.',
          en: 'Birria, cheese, beans, onion, cilantro and consommé.'
        }
      },
      {
        id: 'pizza-birria',
        name: 'Pizza Birria',
        price: 11.99,
        desc: {
          es: 'Birria, queso, cebolla, cilantro y consomé.',
          en: 'Birria, cheese, onion, cilantro and consommé.'
        }
      },
      {
        id: 'huarache',
        name: 'Huarache',
        price: 12.99,
        desc: {
          es: 'Asada, birria, pastor o pollo. Carne, frijoles, cebolla, cilantro, lechuga, queso, crema y nopal.',
          en: 'Asada, birria, pastor or chicken. Meat, beans, onion, cilantro, lettuce, cheese, sour cream and cactus.'
        }
      },
      { id: 'birria-de-chivo', name: 'Birria de Chivo', price: 18.99 },
      {
        id: 'plato-de-birria-de-chivo',
        name: 'Plato de Birria de Chivo',
        price: 19.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'papa-horneada',
        name: 'Papa Horneada',
        price: 9.99,
        desc: {
          es: 'Mantequilla, queso, crema, tocino, cebollín y jalapeños.',
          en: 'Butter, cheese, sour cream, bacon, chives and jalapeños.'
        }
      },
      {
        id: 'torta',
        name: 'Torta',
        variants: [
          { label: { es: 'Regular', en: 'Regular' }, price: 10.99 },
          { label: { es: 'Con papas fritas', en: 'With french fries' }, price: 14.99 }
        ],
        desc: {
          es: 'Asada, birria, pastor, carnitas o pollo. Mayonesa, lechuga, tomate, cebolla y guacamole.',
          en: 'Asada, birria, pastor, carnitas or chicken. Mayo, lettuce, tomato, onion and guacamole.'
        }
      },
      {
        id: 'super-fries',
        name: 'Super Fries',
        price: 12.99,
        desc: {
          es: 'Asada, birria, pastor, carnitas o pollo. Carne, papas fritas, frijoles, queso, pico de gallo, crema y guacamole.',
          en: 'Asada, birria, pastor, carnitas or chicken. Meat, french fries, beans, cheese, pico de gallo, sour cream and guacamole.'
        }
      },
      {
        id: 'super-nachos',
        name: 'Super Nachos',
        price: 12.99,
        desc: {
          es: 'Carne, nachos, frijoles, queso, cebolla, cilantro, crema y guacamole.',
          en: 'Meat, nachos, beans, cheese, onion, cilantro, sour cream and guacamole.'
        }
      },
      {
        id: 'hamburguesa',
        name: 'Hamburguesa',
        price: 9.99,
        desc: { es: 'Con papas fritas.', en: 'Served with french fries.' }
      },
      {
        id: 'buffalo-wings',
        name: 'Buffalo Wings',
        variants: [
          { label: { es: 'Docena', en: 'Dozen' }, price: 18.99 },
          { label: { es: 'Media docena', en: 'Half dozen' }, price: 12.99 }
        ],
        desc: { es: 'Con papas fritas.', en: 'Served with french fries.' }
      },
      {
        id: 'chicken-nuggets',
        name: 'Chicken Nuggets',
        price: 6.99,
        desc: { es: 'Con papas fritas.', en: 'Served with french fries.' }
      }
    ]
  },
  {
    id: 'desayunos-tacos-y-burritos',
    name: { es: 'Desayunos, Tacos y Burritos', en: 'Breakfast, Tacos & Burritos' },
    items: [
      {
        id: 'huevos-con-jamon',
        name: 'Huevos con Jamón',
        price: 13.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'huevos-con-tocino',
        name: 'Huevos con Tocino',
        price: 13.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'huevos-con-chorizo',
        name: 'Huevos con Chorizo',
        price: 13.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'huevos-con-nopales',
        name: 'Huevos con Nopales',
        price: 12.99,
        desc: {
          es: 'Arroz, frijoles y tortillas.',
          en: 'Rice, beans and tortillas.'
        }
      },
      {
        id: 'huevos-rancheros',
        name: 'Huevos Rancheros',
        price: 13.99,
        desc: { es: 'Arroz y frijoles.', en: 'Rice and beans.' }
      },
      {
        id: 'chilaquiles',
        name: 'Chilaquiles',
        price: 14.99,
        desc: { es: 'Arroz y frijoles.', en: 'Rice and beans.' }
      },
      {
        id: 'tacos-dorados',
        name: 'Tacos Dorados',
        price: 14.99,
        desc: {
          es: '3 tacos, arroz, frijoles y ensalada.',
          en: '3 tacos, rice, beans and salad.'
        }
      },
      {
        id: 'burrito-regular',
        name: 'Burrito Regular',
        price: 9.99,
        desc: {
          es: 'Asada, pastor, carnitas, pollo o birria. Arroz y frijoles.',
          en: 'Asada, pastor, carnitas, chicken or birria. Rice and beans.'
        }
      },
      {
        id: 'super-burrito',
        name: 'Super Burrito',
        price: 13.99,
        desc: {
          es: 'Arroz, frijoles, guacamole, queso, crema y pico de gallo.',
          en: 'Rice, beans, guacamole, cheese, sour cream and pico de gallo.'
        }
      },
      {
        id: 'wet-burrito',
        name: 'Wet Burrito',
        price: 13.99,
        desc: {
          es: 'Arroz, frijoles y crema.',
          en: 'Rice, beans and sour cream.'
        }
      },
      {
        id: 'tacos',
        name: 'Tacos',
        price: 3.00,
        priceNote: { es: 'c/u', en: 'each' },
        desc: {
          es: 'Asada, pastor, chorizo, carnitas, pollo o birria.',
          en: 'Asada, pastor, chorizo, carnitas, chicken or birria.'
        }
      },
      {
        id: 'tacos-de-asada',
        name: 'Tacos de Asada',
        price: 8.99,
        desc: { es: '2 tacos y ensalada.', en: '2 tacos and salad.' }
      },
      {
        id: 'tacos-de-camaron',
        name: '3 Tacos de Camarón',
        price: 15.99,
        desc: {
          es: 'Repollo, pico de gallo y cebolla.',
          en: 'Cabbage, pico de gallo and onion.'
        }
      },
      {
        id: 'tacos-de-pescado',
        name: '3 Tacos de Pescado',
        price: 15.99,
        desc: {
          es: 'Repollo, pico de gallo y cebolla.',
          en: 'Cabbage, pico de gallo and onion.'
        }
      }
    ]
  },
  {
    id: 'bebidas-y-cocteles',
    name: { es: 'Bebidas y Cocteles', en: 'Drinks & Cocktails' },
    items: [
      { id: 'sangria-o-mineragua', name: 'Sangría o Mineragua Preparadas', price: 8.99 },
      { id: 'jarritos', name: 'Jarritos', price: 3.99 },
      {
        id: 'aguas-frescas',
        name: 'Aguas Frescas',
        price: 2.99,
        desc: {
          es: 'Horchata, jamaica o tamarindo.',
          en: 'Horchata, hibiscus or tamarind.'
        }
      },
      {
        id: 'aguas-frescas-para-llevar',
        name: 'Aguas Frescas para Llevar',
        img: 'aguas-frescas',
        price: 4.99,
        desc: {
          es: 'Horchata, jamaica o tamarindo.',
          en: 'Horchata, hibiscus or tamarind. To go.'
        }
      },
      {
        id: 'sodas',
        name: 'Sodas',
        img: 'coca-cola',
        variants: [
          { label: { es: '½ litro botella', en: '½ liter bottle' }, price: 4.99 },
          { label: { es: 'Bote', en: 'Can' }, price: 3.99 }
        ]
      },
      { id: 'michelada', name: 'Michelada', price: 12.99 },
      {
        id: 'michelada-botanera',
        name: 'Michelada Botanera',
        price: 18.99,
        desc: {
          es: 'Camarón curtido, camarón cocido, pescado, pepino y cebolla.',
          en: 'Cured shrimp, cooked shrimp, fish, cucumber and onion.'
        }
      },
      {
        id: 'michelada-cevichera',
        name: 'Michelada Cevichera',
        price: 18.99,
        desc: {
          es: 'Camarón curtido, camarón cocido, pescado, pulpo, jaiba, tomate, cebolla y cilantro.',
          en: 'Cured shrimp, cooked shrimp, fish, octopus, crab, tomato, onion and cilantro.'
        }
      },
      {
        id: 'chabela',
        name: 'Chabela',
        price: 14.99,
        desc: {
          es: 'Caldo de camarón y camarones cocidos.',
          en: 'Shrimp broth and cooked shrimp.'
        }
      },
      {
        id: 'chabela-doble',
        name: 'Chabela Doble',
        price: 18.99,
        desc: {
          es: 'Caldo de camarón y camarones cocidos.',
          en: 'Shrimp broth and cooked shrimp.'
        }
      },
      {
        id: 'chabela-doble-botanera',
        name: 'Chabela Doble Botanera',
        price: 26.99,
        desc: {
          es: 'Camarón curtido, camarón cocido, pescado, pepino y cebolla.',
          en: 'Cured shrimp, cooked shrimp, fish, cucumber and onion.'
        }
      },
      {
        id: 'chabela-4x4',
        name: 'Chabela 4x4',
        price: 30.99,
        desc: {
          es: 'Caldo de camarón y camarones cocidos.',
          en: 'Shrimp broth and cooked shrimp.'
        }
      },
      {
        id: 'super-chabela',
        name: 'Super Chabela',
        price: 48.99,
        desc: {
          es: '12 ostiones preparados con ceviche de pescado.',
          en: '12 prepared oysters with fish ceviche.'
        }
      },
      {
        id: 'cervezas-botaneras',
        name: 'Cervezas Botaneras',
        price: 48.99,
        desc: {
          es: '6 cervezas, camarón curtido, camarón cocido, pescado, pepino y cebolla.',
          en: '6 beers, cured shrimp, cooked shrimp, fish, cucumber and onion.'
        }
      },
      {
        id: 'margaritas',
        name: 'Margaritas',
        price: 9.99,
        desc: {
          es: 'Mango, limón o fresa. Tequila, sabor, hielo en cubos o molido y sal escarchada.',
          en: 'Mango, lime or strawberry. Tequila, flavor, ice on the rocks or frozen, salted rim.'
        }
      },
      {
        id: 'margarita-loca',
        name: 'Margarita Loca',
        price: 12.99,
        desc: {
          es: 'Margarita decorada con gomitas, fruta y sal escarchada.',
          en: 'Margarita decorated with gummies, fruit and salted rim.'
        }
      },
      {
        id: 'pink-limonada-margarita',
        name: 'Pink Limonada Margarita',
        price: 12.99,
        desc: {
          es: 'Margarita con extra tequila y pink limonada.',
          en: 'Margarita with extra tequila and pink lemonade.'
        }
      },
      {
        id: 'pina-colada',
        name: 'Piña Colada',
        price: 9.99,
        desc: {
          es: 'Ron, piña colada mix y hielo molido.',
          en: 'Rum, piña colada mix and crushed ice.'
        }
      },
      {
        id: 'cantarito',
        name: 'Cantarito',
        price: 10.99,
        desc: {
          es: 'Tequila, jugo de toronja, jugo de naranja, Squirt, agua mineral y hielo.',
          en: 'Tequila, grapefruit juice, orange juice, Squirt, sparkling water and ice.'
        }
      },
      {
        id: 'vampiro',
        name: 'Vampiro',
        price: 8.99,
        desc: {
          es: 'Tequila blanco, sangría, Squirt, limón, hielo y sal.',
          en: 'Blanco tequila, sangría, Squirt, lime, ice and salt.'
        }
      },
      {
        id: 'las-vegas-drink',
        name: 'Las Vegas Drink',
        price: 17.99,
        desc: {
          es: 'Tequila, sabor y hielo molido.',
          en: 'Tequila, flavor and crushed ice.'
        }
      },
      {
        id: 'mojito',
        name: 'Mojito',
        price: 10.99,
        desc: {
          es: 'Ron, agua mineral, Squirt, hielo, limón, azúcar y menta.',
          en: 'Rum, sparkling water, Squirt, ice, lime, sugar and mint.'
        }
      },
      {
        id: 'paloma',
        name: 'Paloma',
        price: 10.99,
        desc: {
          es: 'Tequila, jugo de limón, Squirt y hielo.',
          en: 'Tequila, lime juice, Squirt and ice.'
        }
      },
      {
        id: 'submarino',
        name: 'Submarino',
        price: 10.99,
        desc: {
          es: 'Shot de tequila y cerveza draft.',
          en: 'Tequila shot and draft beer.'
        }
      }
    ]
  }
];
