import descriptionOfModels from "./descriptionsList.js";
import Description from "./SingleDescription.js";

export function Descriptions() {
    const color = "rgb(212, 223, 237)";

    const details = descriptionOfModels.map((desc) =>
        <Description
            key={desc.id}
            isExist={desc.isExist}
            model={desc.model}
            text={desc.description}
        />);

    return (
        <section className="description-section">
            <h2 id="description-heading" style={{ color: color }}> Descriptions of models </h2>
            {details}
        </section>
    );
}