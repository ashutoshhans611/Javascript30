(function(){
    const input = document.querySelectorAll('.controls input');

    /* Event listener of the UI elements*/
    input.forEach(input => input.addEventListener('change', handleUpdate));
    input.forEach(input => input.addEventListener('mousemove', handleUpdate));

    /* Methods to update/refresh the UI */
    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

})();