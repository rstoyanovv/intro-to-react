import descriptionOfModels from "./descriptionsList.js";
import Detail from "./SingleDescription.js";

export function Descriptions() {
    const details = [];
    const isExistValues = [true, false, true, true, false, true];
    const color = "rgb(212, 223, 237)";

    for (let i = 0; i < descriptionOfModels.length; i++) {
        const model = descriptionOfModels[i];
        const isExist = isExistValues[i];

        details.push(
            <Detail
                key={`${i}`}
                isExist={isExist}
                name={model.model}
                text={model.description}
            />
        );
    }
    return (
        <section className="description-section">
            <h2 id="description-heading" style={{ color: color }}> Descriptions of models </h2>
            {details}
        </section>
    );
}