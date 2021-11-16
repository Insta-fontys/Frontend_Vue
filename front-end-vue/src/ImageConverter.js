export default{
    
    convertImage(file){
        const reader = new FileReader()

        let rawImg;
        reader.onloadend = () => {
            rawImg = reader.result;
            console.log("Raw image = " + rawImg);    
        }
        console.log("file = " + file)
        return reader.readAsDataURL(file);
    }
}