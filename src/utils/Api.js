class Api{
    constructor(host, token){
        this._host = host;
        this._token = token;
        this._getJsonOrError = this._getJsonOrError.bind(this);
        this._getHeaders = this._getHeaders.bind(this);
    }

    _getJsonOrError(res){
        if (res.ok){
            return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    _getHeaders(){
        return {
            authorization: this._token,
            'content-type': 'application/json',
        }
    }

    getCards(){
        return fetch(`${this._host}/v1/cohort-47/cards`, {
            headers: this._getHeaders(),
        })
        .then(this._getJsonOrError)
    }

    getUserData(){
        return fetch(`${this._host}/v1/cohort-47/users/me`, {
            headers: this._getHeaders(),
        })
        .then(this._getJsonOrError)
    }

    editUserinfo(info){
        return fetch(`${this._host}/v1/cohort-47/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: info.name,
                about: info.about
            })
        })
        .then(this._getJsonOrError)
    }

    updateAvatar(info){
        return fetch(`${this._host}/v1/cohort-47/users/me/avatar`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                avatar: info.avatar
            })
        })
        .then(this._getJsonOrError)
    }

    createCard(item){
        return fetch(`${this._host}/v1/cohort-47/cards`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: item.name, 
                link: item.link})
        })
        .then(this._getJsonOrError)
    }

    deleteCard(id){
        return fetch(`${this._host}/v1/cohort-47/cards/${id}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
        .then(this._getJsonOrError)
    }

    likeCard(id){
        return fetch(`${this._host}/v1/cohort-47/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._getHeaders(),
        })
        .then(this._getJsonOrError)
    }

    deleteLike(id){
        return fetch(`${this._host}/v1/cohort-47/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
        .then(this._getJsonOrError)
    }

}

const api = new Api('https://mesto.nomoreparties.co', '0c92a17d-ab7c-45c7-b476-e80d1afdd752');

export {api};