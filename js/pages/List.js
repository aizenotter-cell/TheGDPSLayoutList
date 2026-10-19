import OriginalList from "https://githubusercontent.com";

export default {
    ...OriginalList,
    data: () => ({
        ...OriginalList.data(),
        historyOpen: false
    })
};
