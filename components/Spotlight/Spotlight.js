import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview"

export default function Spotlight({ image, title, artist }) {

    return (
        <ArtPiecePreview image={image} title={title} artist={artist} />
    );
}
  