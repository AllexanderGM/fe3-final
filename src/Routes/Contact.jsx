import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    const [name, setstate] = useState();
    
    return (
        <div>
            <h2>Want to know more?</h2>
            <p>Send us your questions and we will contact you</p>
            <Form setstate={setstate} />
            <Message name={name}/>
        </div>
    );
};

export default Contact;
