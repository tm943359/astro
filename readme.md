DataBase & Tables
astrochats
    chatmessages
Software Architecture Pattern Used
 **Modularized MVC pattern enhanced by a layered approach**, which is a popular design for scalable and maintainable web applications.

/config: Store project constants, db connections, environment variables
/middlewares: Commonly used functions (related to controllers)
/public: For static things
/utils: Commonly used functions (related to REST API)
/modules
    /modulesName
        |-/controllers
        |-/models
        |-/routes
        |-/services
        |-index.js