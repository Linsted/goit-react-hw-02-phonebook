export const PhonebookForm = () => {
    return (
        <form action="">
            <label htmlFor=""> Name
                <input
                        autoComplete="off"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
            </label>

            <button type="submit">Add contact</button>
        </form>
    )
}