const ImageCard = ({ top, left, width, height, src }) => {
    return (
        <img
            src={src}
            alt=""
            style={{
                position: "absolute",
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`,
                objectFit: "cover",
            }}
        />
        // <div
        //     style={{
        //         position: "absolute",
        //         top: `${top}px`,
        //         left: `${left}px`,
        //         width: `${width}px`,
        //         height: `${height}px`,
        //         backdropFilter: backdropFilter ?? "none",
        //         WebkitBackdropFilter: backdropFilter ?? "none",
        //         backgroundColor: backdropFilter
        //             ? "rgba(110, 111, 114, 0.82)"
        //             : "rgba(110, 111, 114, 1)",
        //         zIndex: zIndex ?? 0,
        //     }}
        //     className="flex flex-col justify-end gap-2 px-3 py-3 rounded-xl"
        // >
        //     <p className="text-white text-xl font-medium">Eating protein on GLP-1s</p>
        //     <button></button>
        // </div>
    )
}

export default ImageCard;