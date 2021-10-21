import { usePoison } from "./Poison/PoisonDataProvider.js";
import { PoisonList } from "./Poison/Poisonlist.js";

const allThePoison = usePoison()

for(const poisons of allThePoison){
    console.log(poisons)
}

PoisonList()

