export function createDropZone(dropzoneElement, inputFile) {
    function onDragHover(event) {
        event.preventDefault();
        event.stopPropagation();
        dropzoneElement.classList.add('drag-hover');
    }
    function onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        dropzoneElement.classList.remove('drag-hover');
    }
    function onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        dropzoneElement.classList.remove('drag-hover');
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            inputFile.files = files;
            inputFile.dispatchEvent(new Event('change'));
        }
    }
    function onPaste(event) {
        event.preventDefault();
        event.stopPropagation();
        const clipboardData = event.clipboardData;
        if (clipboardData && clipboardData.files.length > 0) {
            inputFile.files = clipboardData.files;
            inputFile.dispatchEvent(new Event('change'));
        }
    }
    dropzoneElement.addEventListener('dragover', onDragHover);
    dropzoneElement.addEventListener('dragleave', onDragLeave);
    dropzoneElement.addEventListener('drop', onDrop);
    dropzoneElement.addEventListener('paste', onPaste);

    return {
        destroy: () => {
            dropzoneElement.removeEventListener('dragover', onDragHover);
            dropzoneElement.removeEventListener('dragleave', onDragLeave);
            dropzoneElement.removeEventListener('drop', onDrop);
            dropzoneElement.removeEventListener('paste', onPaste);
        }
    };
}