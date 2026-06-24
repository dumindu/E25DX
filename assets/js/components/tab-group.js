document.addEventListener("DOMContentLoaded", () => {
    const KEY = (group) => `tabs:${group}`;

    const syncGroup = (group, tabKey) => {
        if (!group || !tabKey) return;

        document
            .querySelectorAll(`.tabs[data-group="${CSS.escape(group)}"] details[name]`)
            .forEach((detail) => {
                const shouldOpen = detail.querySelector('summary')?.dataset.index === tabKey;
                if (detail.open !== shouldOpen) detail.open = shouldOpen;
            });

        sessionStorage.setItem(KEY(group), tabKey);
    };

    new Set(
        [...document.querySelectorAll(".tabs[data-group]")].map((el) => el.dataset.group)
    ).forEach((group) => syncGroup(group, sessionStorage.getItem(KEY(group))));

    document.addEventListener("click", (e) => {
        const summary = e.target.closest('.tabs[data-group] summary');
        if (!summary) return;

        e.preventDefault(); // stop native <details> toggle
        syncGroup(summary.closest(".tabs").dataset.group, summary.dataset.index);
    });
});