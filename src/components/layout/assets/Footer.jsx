function Footer() {
    const footerYear = new Date().getFullYear()
    return(
        <footer className="footer p-10 bg-gray-700 text-primary-content-center">
            <div>
                <svg 
                width='50'
                height='50'
                viewBox='0 0 24 24'
                xmins='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
                className='inline-block fill-content'> <path d='M22.672.15.2261-2.432.811.841 2.515c.33 1.091-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.2261-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831.808c-1.135.328-2.143-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.45612.432-.809-1.621-4.823-2.432.808c-1.355.384-2.588-.59-2.558-1.836 0-.817.509-1.582 1.327-1.84612.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.2291.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.533 1.842-2.553.819 0 1.583.509 1.85 1.3261.842 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.4561-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.4281-5.01 1.657 1.619 4.828 5.011-1.674-1.62-4.829z'></path> </svg>
                <p>Copyright & Copy: {footerYear} All Rights Reserved</p>
            </div>
        </footer>
    )

}




export default Footer