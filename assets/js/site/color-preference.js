const lsKeyColorPreference = 'color-preference'

const getColorPreference = () => {
    let lastUsedColorPreference = localStorage.getItem(lsKeyColorPreference)
    if (lastUsedColorPreference !== null)
        return lastUsedColorPreference
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

let colorPreference = getColorPreference()
localStorage.setItem(lsKeyColorPreference, colorPreference)
document.firstElementChild.setAttribute('data-color', colorPreference)

let colorSchemes = document.querySelectorAll('.color-scheme')
colorSchemes.forEach(el => {
    el.addEventListener('click', function () {
        let newColorPreference = el.dataset.value
        if (newColorPreference !== colorPreference) {
            colorPreference = newColorPreference
            setColorPreference()
        }
    })
});

const setColorPreference = () => {
    localStorage.setItem(lsKeyColorPreference, colorPreference)
    document.firstElementChild.setAttribute('data-color', colorPreference)
}

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches: isDark}) => {
        colorPreference = isDark ? 'dark' : 'light'
        setColorPreference()
    })