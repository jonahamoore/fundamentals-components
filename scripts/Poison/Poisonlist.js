import { usePoison } from "./PoisonDataProvider.js";
import { poison } from "./Poison.js";

export const PoisonList = () => {

    const contentElement = document.querySelector("#PoisonList")
    const poisonFunction = usePoison()

    let poisonHTMLRepresentations = ""
    for (const singlePoisonObject of poisonFunction) {
        poisonHTMLRepresentations += poison(singlePoisonObject)
    }
    contentElement.innerHTML += `
        <section id= "PoisonList">${poisonHTMLRepresentations}
        </section>
    `
}