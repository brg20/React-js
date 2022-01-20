// import SantaRita from './images/plants/SantaRita.jpg';
// import Potus from './images/plants/Potus.jpg';
// import Peperomia from './images/plants/PeperomiaSandia.jpg';
// import Suculenta from './images/plants/Suculenta.jpg';
// import Malvon from './images/plants/Malvon.jpg';

const getListItems = () => {
    const listItems = [
    {
      name: "Santa Rita",
      description:
        "Son arbustos o árboles pequeños, algunos trepadores perennes en las zonas lluviosas todo el año, o bien caducifolios en las de estación seca; de entre 1 hasta 12 m de altura. Se sujetan en otras plantas usando sus afiladas púas que tienen la punta cubierta de una sustancia cerosa negra. Las hojas son alternas, simples y de forma ovalado-acuminada de 4-12 cm de largo y 2-6 de ancho. Las flores, hermafroditas, son axilares, conspicuas, tubulares, con 5-6 lóbulos cortos, generalmente blancas, organizadas en grupos de 3, cada una insertada en una bráctea persistente de aspecto papiráceo y habitualmente vivamente coloreada de blanco, amarillo, rosado, magenta, purpúreo, rojo, anaranjado... El número de estambres varia de 5 a 10; con filamentos cortos y soldados en la base. El ovario es fusiforme, glabro o pubescente, con estilo lateral corto. El fruto es un aquenio pentámero estrecho, fusiforme o cilíndrico.",
      img:'https://www.google.com/search?q=malvon+imagenes&sxsrf=AOaemvI5PLv_Pseh3nneD41waMIyivZTEg:1637888622810&tbm=isch&source=iu&ictx=1&fir=1caGUY6sMBPsKM%252CLNYxB7ZeR3ft-M%252C_%253BsJ5INCw5cTykrM%252CS5yQNj_sfQqYTM%252C_%253BhHDOgt3frlE4fM%252C57FIqIGMrZuCDM%252C_%253BIfhdAFfj4WTLfM%252CqzVX25UoMaNZZM%252C_%253By13ihPCYK5vz2M%252C9iJVsm8Xv4dyAM%252C_%253BF45QQgNYFahQPM%252CTKPDkppLa0B_OM%252C_%253BeIh0MMaU4p0psM%252C2FgxDvdJmdmGxM%252C_%253BNt0iEeqnuCVHTM%252CLNYxB7ZeR3ft-M%252C_%253Bt-3Vk7eMQ6WXVM%252CCVmPDy7e5g1PhM%252C_%253BTOVaAgY05BD1wM%252CHVyvqdluwIuqEM%252C_%253B-k0QVUNun9Y3oM%252CnZgiYDypeZz7zM%252C_%253BRG_aNPT8GflyXM%252CgkH-cXw9H6ceqM%252C_%253B8dyYW6ToybgF1M%252CqzVX25UoMaNZZM%252C_%253Be579mZh9bOhzkM%252CnZgiYDypeZz7zM%252C_&vet=1&usg=AI4_-kT-esnw1vMn1RDJqSYR9oq31TjWQA&sa=X&sqi=2&ved=2ahUKEwir-azM6rT0AhUSR_EDHaExDAcQ9QF6BAgcEAE#imgrc=sJ5INCw5cTykrM',
      stock: 5,
      itemsAdded:0
    },
    {
      name: "Potus",
      description:
        "Liana que puede alcanzar 20 m de alto, con tallos de hasta 4 cm de diámetro. Trepa mediante raíces aéreas que se enganchan a las ramas de los árboles. Las hojas son perennes, alternas y acorazonadas, enteras en las plantas jóvenes, pero irregularmente pinnadas en las maduras y de hasta 1 m de largo por 45 cm de ancho (en las plantas jóvenes no superan los 20 cm de largo). Esta planta florece muy raramente, ya sea en la naturaleza o cultivada, debido a que no sintetiza la fitohormona giberelina, produciéndose la floración si se suministra de manera artificial.",
      img:'https://www.google.com/search?q=malvon+imagenes&sxsrf=AOaemvI5PLv_Pseh3nneD41waMIyivZTEg:1637888622810&tbm=isch&source=iu&ictx=1&fir=1caGUY6sMBPsKM%252CLNYxB7ZeR3ft-M%252C_%253BsJ5INCw5cTykrM%252CS5yQNj_sfQqYTM%252C_%253BhHDOgt3frlE4fM%252C57FIqIGMrZuCDM%252C_%253BIfhdAFfj4WTLfM%252CqzVX25UoMaNZZM%252C_%253By13ihPCYK5vz2M%252C9iJVsm8Xv4dyAM%252C_%253BF45QQgNYFahQPM%252CTKPDkppLa0B_OM%252C_%253BeIh0MMaU4p0psM%252C2FgxDvdJmdmGxM%252C_%253BNt0iEeqnuCVHTM%252CLNYxB7ZeR3ft-M%252C_%253Bt-3Vk7eMQ6WXVM%252CCVmPDy7e5g1PhM%252C_%253BTOVaAgY05BD1wM%252CHVyvqdluwIuqEM%252C_%253B-k0QVUNun9Y3oM%252CnZgiYDypeZz7zM%252C_%253BRG_aNPT8GflyXM%252CgkH-cXw9H6ceqM%252C_%253B8dyYW6ToybgF1M%252CqzVX25UoMaNZZM%252C_%253Be579mZh9bOhzkM%252CnZgiYDypeZz7zM%252C_&vet=1&usg=AI4_-kT-esnw1vMn1RDJqSYR9oq31TjWQA&sa=X&sqi=2&ved=2ahUKEwir-azM6rT0AhUSR_EDHaExDAcQ9QF6BAgcEAE#imgrc=sJ5INCw5cTykrM',
      stock: 4,
      itemsAdded:0
    },
    {
      name: "Peperomia",
      description:
        "Aunque variando considerablemente en apariencia, generalmente tienen tallos gruesos, rectos, con hojas carnosas. Las flores de Peperomia típicamente son de tipo espádice cónicas amarillas a pardas. Se las cultiva mucho por su follaje ornamental. Son mayormente nativas de América tropical. Son compactas y pequeñas, usualmente no exceden de 3 dm de altura. Suelen tener tallos y hojas carnosos. Pueden ser hojas cordadas, lanceoladas; de 2-10 cm de largo. Pueden ser verdes o con tiras, marmoleadas, o bordeadas con verde pálido, rojo o gris, y los peciolos de algunas pueden ser rojos. Flores diminutas, inapreciables; con excepciones.",
      img:'https://www.google.com/search?q=malvon+imagenes&sxsrf=AOaemvI5PLv_Pseh3nneD41waMIyivZTEg:1637888622810&tbm=isch&source=iu&ictx=1&fir=1caGUY6sMBPsKM%252CLNYxB7ZeR3ft-M%252C_%253BsJ5INCw5cTykrM%252CS5yQNj_sfQqYTM%252C_%253BhHDOgt3frlE4fM%252C57FIqIGMrZuCDM%252C_%253BIfhdAFfj4WTLfM%252CqzVX25UoMaNZZM%252C_%253By13ihPCYK5vz2M%252C9iJVsm8Xv4dyAM%252C_%253BF45QQgNYFahQPM%252CTKPDkppLa0B_OM%252C_%253BeIh0MMaU4p0psM%252C2FgxDvdJmdmGxM%252C_%253BNt0iEeqnuCVHTM%252CLNYxB7ZeR3ft-M%252C_%253Bt-3Vk7eMQ6WXVM%252CCVmPDy7e5g1PhM%252C_%253BTOVaAgY05BD1wM%252CHVyvqdluwIuqEM%252C_%253B-k0QVUNun9Y3oM%252CnZgiYDypeZz7zM%252C_%253BRG_aNPT8GflyXM%252CgkH-cXw9H6ceqM%252C_%253B8dyYW6ToybgF1M%252CqzVX25UoMaNZZM%252C_%253Be579mZh9bOhzkM%252CnZgiYDypeZz7zM%252C_&vet=1&usg=AI4_-kT-esnw1vMn1RDJqSYR9oq31TjWQA&sa=X&sqi=2&ved=2ahUKEwir-azM6rT0AhUSR_EDHaExDAcQ9QF6BAgcEAE#imgrc=sJ5INCw5cTykrM',
      stock: 7,
      itemsAdded:0
    },
    {
      name: "Suculenta",
      description:
        "Las plantas suculentas —del latín suculentus, 'jugoso'— o crasas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación. Estos órganos de reserva tienen una alta proporción de tejido parenquimático.​ Su adaptación les permite mantener reservas de agua durante períodos prolongados, y sobreviven a los largos períodos de sequía en climas áridos. Uno de los ejemplos más conocidos de suculencia es el de los tallos de los cactus del Nuevo Mundo, similar al de varias euforbiáceas y apocináceas africanas. Ejemplos de hojas suculentas se encuentran en Aloe, Agave, y en las crasuláceas.",
      img:'https://www.google.com/search?q=malvon+imagenes&sxsrf=AOaemvI5PLv_Pseh3nneD41waMIyivZTEg:1637888622810&tbm=isch&source=iu&ictx=1&fir=1caGUY6sMBPsKM%252CLNYxB7ZeR3ft-M%252C_%253BsJ5INCw5cTykrM%252CS5yQNj_sfQqYTM%252C_%253BhHDOgt3frlE4fM%252C57FIqIGMrZuCDM%252C_%253BIfhdAFfj4WTLfM%252CqzVX25UoMaNZZM%252C_%253By13ihPCYK5vz2M%252C9iJVsm8Xv4dyAM%252C_%253BF45QQgNYFahQPM%252CTKPDkppLa0B_OM%252C_%253BeIh0MMaU4p0psM%252C2FgxDvdJmdmGxM%252C_%253BNt0iEeqnuCVHTM%252CLNYxB7ZeR3ft-M%252C_%253Bt-3Vk7eMQ6WXVM%252CCVmPDy7e5g1PhM%252C_%253BTOVaAgY05BD1wM%252CHVyvqdluwIuqEM%252C_%253B-k0QVUNun9Y3oM%252CnZgiYDypeZz7zM%252C_%253BRG_aNPT8GflyXM%252CgkH-cXw9H6ceqM%252C_%253B8dyYW6ToybgF1M%252CqzVX25UoMaNZZM%252C_%253Be579mZh9bOhzkM%252CnZgiYDypeZz7zM%252C_&vet=1&usg=AI4_-kT-esnw1vMn1RDJqSYR9oq31TjWQA&sa=X&sqi=2&ved=2ahUKEwir-azM6rT0AhUSR_EDHaExDAcQ9QF6BAgcEAE#imgrc=sJ5INCw5cTykrM',
      stock: 6,
      itemsAdded:0
    },
    {
      name: "Malvon",
      description:
        "El Pelargonium x hortorum presenta un tallo suculento, erguido, pubescente, con estípulas en la base de las hojas y muy ramificados. Tienen sección cilíndrica y una altura de 30 a 60 cm, poseen eustela de tipo ectofloica con discos de almidón y haces colaterales.",
      img:'https://www.google.com/search?q=malvon+imagenes&sxsrf=AOaemvI5PLv_Pseh3nneD41waMIyivZTEg:1637888622810&tbm=isch&source=iu&ictx=1&fir=1caGUY6sMBPsKM%252CLNYxB7ZeR3ft-M%252C_%253BsJ5INCw5cTykrM%252CS5yQNj_sfQqYTM%252C_%253BhHDOgt3frlE4fM%252C57FIqIGMrZuCDM%252C_%253BIfhdAFfj4WTLfM%252CqzVX25UoMaNZZM%252C_%253By13ihPCYK5vz2M%252C9iJVsm8Xv4dyAM%252C_%253BF45QQgNYFahQPM%252CTKPDkppLa0B_OM%252C_%253BeIh0MMaU4p0psM%252C2FgxDvdJmdmGxM%252C_%253BNt0iEeqnuCVHTM%252CLNYxB7ZeR3ft-M%252C_%253Bt-3Vk7eMQ6WXVM%252CCVmPDy7e5g1PhM%252C_%253BTOVaAgY05BD1wM%252CHVyvqdluwIuqEM%252C_%253B-k0QVUNun9Y3oM%252CnZgiYDypeZz7zM%252C_%253BRG_aNPT8GflyXM%252CgkH-cXw9H6ceqM%252C_%253B8dyYW6ToybgF1M%252CqzVX25UoMaNZZM%252C_%253Be579mZh9bOhzkM%252CnZgiYDypeZz7zM%252C_&vet=1&usg=AI4_-kT-esnw1vMn1RDJqSYR9oq31TjWQA&sa=X&sqi=2&ved=2ahUKEwir-azM6rT0AhUSR_EDHaExDAcQ9QF6BAgcEAE#imgrc=sJ5INCw5cTykrM',
      stock: 6,
      itemsAdded:0
    }
  ];

  return new Promise(
          function(resolve){
              setTimeout(()=> resolve(listItems),2000);
          }
      );
}

export const ItemsMock = {getListItems};