// BrandNova System Interactive Control Logic Router
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Plan Scale Toggle Module
    const priceToggle = document.getElementById("priceToggle");
    if (priceToggle) {
        const starterPrice = document.getElementById("starterPrice");
        const growthPrice = document.getElementById("growthPrice");

        priceToggle.addEventListener("click", () => {
            priceToggle.classList.toggle("active");
            
            if (priceToggle.classList.contains("active")) {
                // Discounted Yearly Parameters Applied Cleanly
                starterPrice.innerText = "$39";
                growthPrice.innerText = "$79";
            } else {
                // Baseline Monthly Configuration Returns
                starterPrice.innerText = "$49";
                growthPrice.innerText = "$99";
            }
        });
    }

    // 2. Automated Transmission Intake Routing Emulation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const corporateIdentity = document.getElementById("userName").value;
            alert(`Packet securely processed! Thank you, ${corporateIdentity}. BrandNova operations nodes have queued your context brief.`);
            contactForm.reset();
        });
    }
});