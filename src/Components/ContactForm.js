import * as React from 'react';

export default function ContactForm({order}) {

    //const [expanded, setExpanded] = React.useState(false);

    // constructor = (props) => {
    //     super(props);
    //     this.state={
    //         name: '',
    //         phone: '',
    //         email: '',
    //         comment: ''
    //     };
    //     this.handleOnChange = this.handleOnChange.bind(this);
    //     this.handleOnSubmit = this.handleOnSubmit.bind(this);
    // }

     const handleOnChange = (e) => {
    //     this.setState({ [e.target.name] : e.target.value });
     }

    const handleOnSubmit = async (e) => {
        // e.preventDefault();
        // const { name,  phone, email, comment } = this.state;
        // const bookConsultation = await axios.post('api/contactus',{
        //     name,
        //     phone,
        //     email,
        //     comment
        // })
    }

  return (
    <>
    <form onSubmit ={handleOnSubmit}>
        <input type="text" name="name" id="name" placeholder="Name" onChange={handleOnChange}/>
        <input type="text" name="name" id="email" placeholder="Email" onChange={handleOnChange}/>
        <input type="text" name="name" id="company" placeholder="Company" onChange={handleOnChange}/>
        <textarea type="text" name="message" id="message" placeholder="Message" onChange={handleOnChange}/>
        <div>
            <button className="btn-primary btn-submit">Submit</button>
        </div>
    </form>
        
    </>
  );
}

