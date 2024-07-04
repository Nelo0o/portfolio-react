import { useState, useEffect } from 'react';

export default function ProjectForm({
    onSubmit,
    initialData = {},
    titleLabel = "Titre",
    descriptionLabel = "Description",
    linkLabel = "Lien",
    imageLabel = "Image",
    className = "",
    inputFileId = "file-upload-button",
    htmlForFileId = "file-upload-button"
}) {
    const [title, setTitle] = useState(initialData.title || '');
    const [description, setDescription] = useState(initialData.description || '');
    const [image, setImage] = useState(null);
    const [link, setLink] = useState(initialData.link || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (initialData.id) {
            formData.append('id', initialData.id);
        }
        formData.append('title', title);
        formData.append('description', description);
        formData.append('link', link);
        if (image) {
            formData.append('image', image);
        }
        onSubmit(formData);
        setTitle('');
        setDescription('');
        setLink('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div>
                <label>{titleLabel}</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>{descriptionLabel}</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>{linkLabel}</label>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>{imageLabel}</label>
                <input
                    id={inputFileId}
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                />
                <label htmlFor={htmlForFileId} className="custom-file-upload">
                    Choisir un fichier
                </label>
                <p>{image ? image.name : 'Aucun fichier sélectionné'}</p>
                {image && <img src={URL.createObjectURL(image)} alt="Aperçu de l'image" />}
            </div>
            <button type="submit">Enregistrer</button>
        </form>
    );
}