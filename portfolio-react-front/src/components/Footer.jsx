export default function Footer({ name, address, postalCode, city, email, phone }) {
    return (
        <footer>
            <h3>Me contacter</h3>
            <div className="container-contact">
                <div className="contact">
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{postalCode}</p>
                    <p>{city}</p>
                </div>
                <div className="contact">
                    <a href={`mailto:${email}`}>{email}</a>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
            </div>
        </footer>
    );
}
