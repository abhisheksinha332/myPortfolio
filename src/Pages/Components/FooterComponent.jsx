

const FooterComponent = () => {

    return(
        <footer className="py-12 px-4 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
            <p className="text-sm text-muted-foreground ">
                 &copy; {new Date().getFullYear()} Made with &#10084;&#65039; by Abhishek Sinha
            </p>
            
        </footer>
    )
}

export default FooterComponent;