import "./input.css";
const Input = ({
    palabra = "Boschi",
    name = "null",
    type = "value",
    defaultValue = "",
}) => {
    return (
        <div className="w-full  inputContainer rounded-[5px]">
            <div className="form-control">
                <input
                    type={type}
                    required={true}
                    name={name}
                    defaultValue={defaultValue}
                />
                <label>
                    {palabra.split("").map((letra, index) => {
                        return (
                            <span
                                key={index}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {letra}
                            </span>
                        );
                    })}
                </label>
            </div>
        </div>
    );
};

export default Input;
