export const User = (user) => {
    return (`
    <div class="column" id="${user.id}">
        <div class="image-user">
            <img src="../backend/frontend/${user.image}" alt="" />
        </div>

        <div class="info">
            <div class="info-details">
                <h3>${user.name}</h3>
                <br>
                <div class="icons">
                    <span id="${user.id}"><i class="fa fa-heart-o"></i></span>
                    <span id="${user.id}"><i class="fa fa-comment-o"></i></span>
                    <span id="${user.id}"><i class="fa fa-ban"></i></span>
                </div>
            </div>
        </div>
    </div>
    `)
}