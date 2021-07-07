import * as Icons from '@fortawesome/free-solid-svg-icons'
import { shuffle } from 'lodash'

const CARTAS = 20

const listaiconos = Object
    .keys(Icons)
    .filter(key => key !== "fas")
    .map(icon => Icons[icon])

const auxlista = []
auxlista.push(Icons.faAd)

export default () => {
    let cartas = [];
    console.log(auxlista)
    while(cartas.length < CARTAS){
        const index = Math.floor(Math.random() * listaiconos.length)
        const carta = {
            icon : listaiconos[index],
            adivinada : false
        }
        cartas.push(carta)
        cartas.push({...carta});
    }
    return shuffle(cartas);
}
