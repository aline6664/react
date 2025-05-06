export function getImageUrl(person, size = 's') {
    return (
        'https://imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}