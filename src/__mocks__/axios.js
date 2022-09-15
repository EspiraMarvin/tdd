const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Mrv"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/83.jpg"
                },
                login: {
                    username: "TheFootyGoat"
                }
            },
            {
                name: {
                    first: "Marvi",
                    last: "Espra"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/83.jpg"
                },
                login: {
                    username: "TheFootyGoat"
                }
            },
            {
                name: {
                    first: "Kenya",
                    last: "Kwisha"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/83.jpg"
                },
                login: {
                    username: "TheFootyGoat"
                }
            },
            {
                name: {
                    first: "Azzmio",
                    last: "Laumoja"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/83.jpg"
                },
                login: {
                    username: "TheFootyGoat"
                }
            },
            {
                name: {
                    first: "Laith",
                    last: "Latifi"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/83.jpg"
                },
                login: {
                    username: "TheFootyGoat"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}