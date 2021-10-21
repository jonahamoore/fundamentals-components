export const poison = (poisonArray) => {
    return `
        <section id ="poisonCard">
            <div class="id">${poisonArray.id}</div>
            <div class="species">${poisonArray.species}</div>
            <div class="commonName">${poisonArray.commonName}</div>
            <div class="fatal">${poisonArray.fatal}</div>
            <div class="antidote">${poisonArray.antidote}</div>
        </section>
    `
}