'use strict';
var moment = require('moment')
module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('ciudades', [{
                "id_ciudad": 1,
                "id_estado": 1,
                "ciudad": "Maroa",
                "capital": 0,

            },
            {
                "id_ciudad": 2,
                "id_estado": 1,
                "ciudad": "Puerto Ayacucho",
                "capital": 1,

            },
            {
                "id_ciudad": 3,
                "id_estado": 1,
                "ciudad": "San Fernando de Atabapo",
                "capital": 0,

            },
            {
                "id_ciudad": 4,
                "id_estado": 2,
                "ciudad": "Anaco",
                "capital": 0,

            },
            {
                "id_ciudad": 5,
                "id_estado": 2,
                "ciudad": "Aragua de Barcelona",
                "capital": 0,

            },
            {
                "id_ciudad": 6,
                "id_estado": 2,
                "ciudad": "Barcelona",
                "capital": 1,

            },
            {
                "id_ciudad": 7,
                "id_estado": 2,
                "ciudad": "Boca de Uchire",
                "capital": 0,

            },
            {
                "id_ciudad": 8,
                "id_estado": 2,
                "ciudad": "Cantaura",
                "capital": 0,

            },
            {
                "id_ciudad": 9,
                "id_estado": 2,
                "ciudad": "Clarines",
                "capital": 0,

            },
            {
                "id_ciudad": 10,
                "id_estado": 2,
                "ciudad": "El Chaparro",
                "capital": 0,

            },
            {
                "id_ciudad": 11,
                "id_estado": 2,
                "ciudad": "El Pao Anzoátegui",
                "capital": 0,

            },
            {
                "id_ciudad": 12,
                "id_estado": 2,
                "ciudad": "El Tigre",
                "capital": 0,

            },
            {
                "id_ciudad": 13,
                "id_estado": 2,
                "ciudad": "El Tigrito",
                "capital": 0,

            },
            {
                "id_ciudad": 14,
                "id_estado": 2,
                "ciudad": "Guanape",
                "capital": 0,

            },
            {
                "id_ciudad": 15,
                "id_estado": 2,
                "ciudad": "Guanta",
                "capital": 0,

            },
            {
                "id_ciudad": 16,
                "id_estado": 2,
                "ciudad": "Lechería",
                "capital": 0,

            },
            {
                "id_ciudad": 17,
                "id_estado": 2,
                "ciudad": "Onoto",
                "capital": 0,

            },
            {
                "id_ciudad": 18,
                "id_estado": 2,
                "ciudad": "Pariaguán",
                "capital": 0,

            },
            {
                "id_ciudad": 19,
                "id_estado": 2,
                "ciudad": "Píritu",
                "capital": 0,

            },
            {
                "id_ciudad": 20,
                "id_estado": 2,
                "ciudad": "Puerto La Cruz",
                "capital": 0,

            },
            {
                "id_ciudad": 21,
                "id_estado": 2,
                "ciudad": "Puerto Píritu",
                "capital": 0,

            },
            {
                "id_ciudad": 22,
                "id_estado": 2,
                "ciudad": "Sabana de Uchire",
                "capital": 0,

            },
            {
                "id_ciudad": 23,
                "id_estado": 2,
                "ciudad": "San Mateo Anzoátegui",
                "capital": 0,

            },
            {
                "id_ciudad": 24,
                "id_estado": 2,
                "ciudad": "San Pablo Anzoátegui",
                "capital": 0,

            },
            {
                "id_ciudad": 25,
                "id_estado": 2,
                "ciudad": "San Tomé",
                "capital": 0,

            },
            {
                "id_ciudad": 26,
                "id_estado": 2,
                "ciudad": "Santa Ana de Anzoátegui",
                "capital": 0,

            },
            {
                "id_ciudad": 27,
                "id_estado": 2,
                "ciudad": "Santa Fe Anzoátegui",
                "capital": 0,

            },
            {
                "id_ciudad": 28,
                "id_estado": 2,
                "ciudad": "Santa Rosa",
                "capital": 0,

            },
            {
                "id_ciudad": 29,
                "id_estado": 2,
                "ciudad": "Soledad",
                "capital": 0,

            },
            {
                "id_ciudad": 30,
                "id_estado": 2,
                "ciudad": "Urica",
                "capital": 0,

            },
            {
                "id_ciudad": 31,
                "id_estado": 2,
                "ciudad": "Valle de Guanape",
                "capital": 0,

            },
            {
                "id_ciudad": 43,
                "id_estado": 3,
                "ciudad": "Achaguas",
                "capital": 0,

            },
            {
                "id_ciudad": 44,
                "id_estado": 3,
                "ciudad": "Biruaca",
                "capital": 0,

            },
            {
                "id_ciudad": 45,
                "id_estado": 3,
                "ciudad": "Bruzual",
                "capital": 0,

            },
            {
                "id_ciudad": 46,
                "id_estado": 3,
                "ciudad": "El Amparo",
                "capital": 0,

            },
            {
                "id_ciudad": 47,
                "id_estado": 3,
                "ciudad": "El Nula",
                "capital": 0,

            },
            {
                "id_ciudad": 48,
                "id_estado": 3,
                "ciudad": "Elorza",
                "capital": 0,

            },
            {
                "id_ciudad": 49,
                "id_estado": 3,
                "ciudad": "Guasdualito",
                "capital": 0,

            },
            {
                "id_ciudad": 50,
                "id_estado": 3,
                "ciudad": "Mantecal",
                "capital": 0,

            },
            {
                "id_ciudad": 51,
                "id_estado": 3,
                "ciudad": "Puerto Páez",
                "capital": 0,

            },
            {
                "id_ciudad": 52,
                "id_estado": 3,
                "ciudad": "San Fernando de Apure",
                "capital": 1,

            },
            {
                "id_ciudad": 53,
                "id_estado": 3,
                "ciudad": "San Juan de Payara",
                "capital": 0,

            },
            {
                "id_ciudad": 54,
                "id_estado": 4,
                "ciudad": "Barbacoas",
                "capital": 0,

            },
            {
                "id_ciudad": 55,
                "id_estado": 4,
                "ciudad": "Cagua",
                "capital": 0,

            },
            {
                "id_ciudad": 56,
                "id_estado": 4,
                "ciudad": "Camatagua",
                "capital": 0,

            },
            {
                "id_ciudad": 58,
                "id_estado": 4,
                "ciudad": "Choroní",
                "capital": 0,

            },
            {
                "id_ciudad": 59,
                "id_estado": 4,
                "ciudad": "Colonia Tovar",
                "capital": 0,

            },
            {
                "id_ciudad": 60,
                "id_estado": 4,
                "ciudad": "El Consejo",
                "capital": 0,

            },
            {
                "id_ciudad": 61,
                "id_estado": 4,
                "ciudad": "La Victoria",
                "capital": 0,

            },
            {
                "id_ciudad": 62,
                "id_estado": 4,
                "ciudad": "Las Tejerías",
                "capital": 0,

            },
            {
                "id_ciudad": 63,
                "id_estado": 4,
                "ciudad": "Magdaleno",
                "capital": 0,

            },
            {
                "id_ciudad": 64,
                "id_estado": 4,
                "ciudad": "Maracay",
                "capital": 1,

            },
            {
                "id_ciudad": 65,
                "id_estado": 4,
                "ciudad": "Ocumare de La Costa",
                "capital": 0,

            },
            {
                "id_ciudad": 66,
                "id_estado": 4,
                "ciudad": "Palo Negro",
                "capital": 0,

            },
            {
                "id_ciudad": 67,
                "id_estado": 4,
                "ciudad": "San Casimiro",
                "capital": 0,

            },
            {
                "id_ciudad": 68,
                "id_estado": 4,
                "ciudad": "San Mateo",
                "capital": 0,

            },
            {
                "id_ciudad": 69,
                "id_estado": 4,
                "ciudad": "San Sebastián",
                "capital": 0,

            },
            {
                "id_ciudad": 70,
                "id_estado": 4,
                "ciudad": "Santa Cruz de Aragua",
                "capital": 0,

            },
            {
                "id_ciudad": 71,
                "id_estado": 4,
                "ciudad": "Tocorón",
                "capital": 0,

            },
            {
                "id_ciudad": 72,
                "id_estado": 4,
                "ciudad": "Turmero",
                "capital": 0,

            },
            {
                "id_ciudad": 73,
                "id_estado": 4,
                "ciudad": "Villa de Cura",
                "capital": 0,

            },
            {
                "id_ciudad": 74,
                "id_estado": 4,
                "ciudad": "Zuata",
                "capital": 0,

            },
            {
                "id_ciudad": 75,
                "id_estado": 5,
                "ciudad": "Barinas",
                "capital": 1,

            },
            {
                "id_ciudad": 76,
                "id_estado": 5,
                "ciudad": "Barinitas",
                "capital": 0,

            },
            {
                "id_ciudad": 77,
                "id_estado": 5,
                "ciudad": "Barrancas",
                "capital": 0,

            },
            {
                "id_ciudad": 78,
                "id_estado": 5,
                "ciudad": "Calderas",
                "capital": 0,

            },
            {
                "id_ciudad": 79,
                "id_estado": 5,
                "ciudad": "Capitanejo",
                "capital": 0,

            },
            {
                "id_ciudad": 80,
                "id_estado": 5,
                "ciudad": "Ciudad Bolivia",
                "capital": 0,

            },
            {
                "id_ciudad": 81,
                "id_estado": 5,
                "ciudad": "El Cantón",
                "capital": 0,

            },
            {
                "id_ciudad": 82,
                "id_estado": 5,
                "ciudad": "Las Veguitas",
                "capital": 0,

            },
            {
                "id_ciudad": 83,
                "id_estado": 5,
                "ciudad": "Libertad de Barinas",
                "capital": 0,

            },
            {
                "id_ciudad": 84,
                "id_estado": 5,
                "ciudad": "Sabaneta",
                "capital": 0,

            },
            {
                "id_ciudad": 85,
                "id_estado": 5,
                "ciudad": "Santa Bárbara de Barinas",
                "capital": 0,

            },
            {
                "id_ciudad": 86,
                "id_estado": 5,
                "ciudad": "Socopó",
                "capital": 0,

            },
            {
                "id_ciudad": 87,
                "id_estado": 6,
                "ciudad": "Caicara del Orinoco",
                "capital": 0,

            },
            {
                "id_ciudad": 88,
                "id_estado": 6,
                "ciudad": "Canaima",
                "capital": 0,

            },
            {
                "id_ciudad": 89,
                "id_estado": 6,
                "ciudad": "Ciudad Bolívar",
                "capital": 1,

            },
            {
                "id_ciudad": 90,
                "id_estado": 6,
                "ciudad": "Ciudad Piar",
                "capital": 0,

            },
            {
                "id_ciudad": 91,
                "id_estado": 6,
                "ciudad": "El Callao",
                "capital": 0,

            },
            {
                "id_ciudad": 92,
                "id_estado": 6,
                "ciudad": "El Dorado",
                "capital": 0,

            },
            {
                "id_ciudad": 93,
                "id_estado": 6,
                "ciudad": "El Manteco",
                "capital": 0,

            },
            {
                "id_ciudad": 94,
                "id_estado": 6,
                "ciudad": "El Palmar",
                "capital": 0,

            },
            {
                "id_ciudad": 95,
                "id_estado": 6,
                "ciudad": "El Pao",
                "capital": 0,

            },
            {
                "id_ciudad": 96,
                "id_estado": 6,
                "ciudad": "Guasipati",
                "capital": 0,

            },
            {
                "id_ciudad": 97,
                "id_estado": 6,
                "ciudad": "Guri",
                "capital": 0,

            },
            {
                "id_ciudad": 98,
                "id_estado": 6,
                "ciudad": "La Paragua",
                "capital": 0,

            },
            {
                "id_ciudad": 99,
                "id_estado": 6,
                "ciudad": "Matanzas",
                "capital": 0,

            },
            {
                "id_ciudad": 100,
                "id_estado": 6,
                "ciudad": "Puerto Ordaz",
                "capital": 0,

            },
            {
                "id_ciudad": 101,
                "id_estado": 6,
                "ciudad": "San Félix",
                "capital": 0,

            },
            {
                "id_ciudad": 102,
                "id_estado": 6,
                "ciudad": "Santa Elena de Uairén",
                "capital": 0,

            },
            {
                "id_ciudad": 103,
                "id_estado": 6,
                "ciudad": "Tumeremo",
                "capital": 0,

            },
            {
                "id_ciudad": 104,
                "id_estado": 6,
                "ciudad": "Unare",
                "capital": 0,

            },
            {
                "id_ciudad": 105,
                "id_estado": 6,
                "ciudad": "Upata",
                "capital": 0,

            },
            {
                "id_ciudad": 106,
                "id_estado": 7,
                "ciudad": "Bejuma",
                "capital": 0,

            },
            {
                "id_ciudad": 107,
                "id_estado": 7,
                "ciudad": "Belén",
                "capital": 0,

            },
            {
                "id_ciudad": 108,
                "id_estado": 7,
                "ciudad": "Campo de Carabobo",
                "capital": 0,

            },
            {
                "id_ciudad": 109,
                "id_estado": 7,
                "ciudad": "Canoabo",
                "capital": 0,

            },
            {
                "id_ciudad": 110,
                "id_estado": 7,
                "ciudad": "Central Tacarigua",
                "capital": 0,

            },
            {
                "id_ciudad": 111,
                "id_estado": 7,
                "ciudad": "Chirgua",
                "capital": 0,

            },
            {
                "id_ciudad": 112,
                "id_estado": 7,
                "ciudad": "Ciudad Alianza",
                "capital": 0,

            },
            {
                "id_ciudad": 113,
                "id_estado": 7,
                "ciudad": "El Palito",
                "capital": 0,

            },
            {
                "id_ciudad": 114,
                "id_estado": 7,
                "ciudad": "Guacara",
                "capital": 0,

            },
            {
                "id_ciudad": 115,
                "id_estado": 7,
                "ciudad": "Guigue",
                "capital": 0,

            },
            {
                "id_ciudad": 116,
                "id_estado": 7,
                "ciudad": "Las Trincheras",
                "capital": 0,

            },
            {
                "id_ciudad": 117,
                "id_estado": 7,
                "ciudad": "Los Guayos",
                "capital": 0,

            },
            {
                "id_ciudad": 118,
                "id_estado": 7,
                "ciudad": "Mariara",
                "capital": 0,

            },
            {
                "id_ciudad": 119,
                "id_estado": 7,
                "ciudad": "Miranda",
                "capital": 0,

            },
            {
                "id_ciudad": 120,
                "id_estado": 7,
                "ciudad": "Montalbán",
                "capital": 0,

            },
            {
                "id_ciudad": 121,
                "id_estado": 7,
                "ciudad": "Morón",
                "capital": 0,

            },
            {
                "id_ciudad": 122,
                "id_estado": 7,
                "ciudad": "Naguanagua",
                "capital": 0,

            },
            {
                "id_ciudad": 123,
                "id_estado": 7,
                "ciudad": "Puerto Cabello",
                "capital": 0,

            },
            {
                "id_ciudad": 124,
                "id_estado": 7,
                "ciudad": "San Joaquín",
                "capital": 0,

            },
            {
                "id_ciudad": 125,
                "id_estado": 7,
                "ciudad": "Tocuyito",
                "capital": 0,

            },
            {
                "id_ciudad": 126,
                "id_estado": 7,
                "ciudad": "Urama",
                "capital": 0,

            },
            {
                "id_ciudad": 127,
                "id_estado": 7,
                "ciudad": "Valencia",
                "capital": 1,

            },
            {
                "id_ciudad": 128,
                "id_estado": 7,
                "ciudad": "Vigirimita",
                "capital": 0,

            },
            {
                "id_ciudad": 129,
                "id_estado": 8,
                "ciudad": "Aguirre",
                "capital": 0,

            },
            {
                "id_ciudad": 130,
                "id_estado": 8,
                "ciudad": "Apartaderos Cojedes",
                "capital": 0,

            },
            {
                "id_ciudad": 131,
                "id_estado": 8,
                "ciudad": "Arismendi",
                "capital": 0,

            },
            {
                "id_ciudad": 132,
                "id_estado": 8,
                "ciudad": "Camuriquito",
                "capital": 0,

            },
            {
                "id_ciudad": 133,
                "id_estado": 8,
                "ciudad": "El Baúl",
                "capital": 0,

            },
            {
                "id_ciudad": 134,
                "id_estado": 8,
                "ciudad": "El Limón",
                "capital": 0,

            },
            {
                "id_ciudad": 135,
                "id_estado": 8,
                "ciudad": "El Pao Cojedes",
                "capital": 0,

            },
            {
                "id_ciudad": 136,
                "id_estado": 8,
                "ciudad": "El Socorro",
                "capital": 0,

            },
            {
                "id_ciudad": 137,
                "id_estado": 8,
                "ciudad": "La Aguadita",
                "capital": 0,

            },
            {
                "id_ciudad": 138,
                "id_estado": 8,
                "ciudad": "Las Vegas",
                "capital": 0,

            },
            {
                "id_ciudad": 139,
                "id_estado": 8,
                "ciudad": "Libertad de Cojedes",
                "capital": 0,

            },
            {
                "id_ciudad": 140,
                "id_estado": 8,
                "ciudad": "Mapuey",
                "capital": 0,

            },
            {
                "id_ciudad": 141,
                "id_estado": 8,
                "ciudad": "Piñedo",
                "capital": 0,

            },
            {
                "id_ciudad": 142,
                "id_estado": 8,
                "ciudad": "Samancito",
                "capital": 0,

            },
            {
                "id_ciudad": 143,
                "id_estado": 8,
                "ciudad": "San Carlos",
                "capital": 1,

            },
            {
                "id_ciudad": 144,
                "id_estado": 8,
                "ciudad": "Sucre",
                "capital": 0,

            },
            {
                "id_ciudad": 145,
                "id_estado": 8,
                "ciudad": "Tinaco",
                "capital": 0,

            },
            {
                "id_ciudad": 146,
                "id_estado": 8,
                "ciudad": "Tinaquillo",
                "capital": 0,

            },
            {
                "id_ciudad": 147,
                "id_estado": 8,
                "ciudad": "Vallecito",
                "capital": 0,

            },
            {
                "id_ciudad": 148,
                "id_estado": 9,
                "ciudad": "Tucupita",
                "capital": 1,

            },
            {
                "id_ciudad": 149,
                "id_estado": 24,
                "ciudad": "Caracas",
                "capital": 1,

            },
            {
                "id_ciudad": 150,
                "id_estado": 24,
                "ciudad": "El Junquito",
                "capital": 0,

            },
            {
                "id_ciudad": 151,
                "id_estado": 10,
                "ciudad": "Adícora",
                "capital": 0,

            },
            {
                "id_ciudad": 152,
                "id_estado": 10,
                "ciudad": "Boca de Aroa",
                "capital": 0,

            },
            {
                "id_ciudad": 153,
                "id_estado": 10,
                "ciudad": "Cabure",
                "capital": 0,

            },
            {
                "id_ciudad": 154,
                "id_estado": 10,
                "ciudad": "Capadare",
                "capital": 0,

            },
            {
                "id_ciudad": 155,
                "id_estado": 10,
                "ciudad": "Capatárida",
                "capital": 0,

            },
            {
                "id_ciudad": 156,
                "id_estado": 10,
                "ciudad": "Chichiriviche",
                "capital": 0,

            },
            {
                "id_ciudad": 157,
                "id_estado": 10,
                "ciudad": "Churuguara",
                "capital": 0,

            },
            {
                "id_ciudad": 158,
                "id_estado": 10,
                "ciudad": "Coro",
                "capital": 1,

            },
            {
                "id_ciudad": 159,
                "id_estado": 10,
                "ciudad": "Cumarebo",
                "capital": 0,

            },
            {
                "id_ciudad": 160,
                "id_estado": 10,
                "ciudad": "Dabajuro",
                "capital": 0,

            },
            {
                "id_ciudad": 161,
                "id_estado": 10,
                "ciudad": "Judibana",
                "capital": 0,

            },
            {
                "id_ciudad": 162,
                "id_estado": 10,
                "ciudad": "La Cruz de Taratara",
                "capital": 0,

            },
            {
                "id_ciudad": 163,
                "id_estado": 10,
                "ciudad": "La Vela de Coro",
                "capital": 0,

            },
            {
                "id_ciudad": 164,
                "id_estado": 10,
                "ciudad": "Los Taques",
                "capital": 0,

            },
            {
                "id_ciudad": 165,
                "id_estado": 10,
                "ciudad": "Maparari",
                "capital": 0,

            },
            {
                "id_ciudad": 166,
                "id_estado": 10,
                "ciudad": "Mene de Mauroa",
                "capital": 0,

            },
            {
                "id_ciudad": 167,
                "id_estado": 10,
                "ciudad": "Mirimire",
                "capital": 0,

            },
            {
                "id_ciudad": 168,
                "id_estado": 10,
                "ciudad": "Pedregal",
                "capital": 0,

            },
            {
                "id_ciudad": 169,
                "id_estado": 10,
                "ciudad": "Píritu Falcón",
                "capital": 0,

            },
            {
                "id_ciudad": 170,
                "id_estado": 10,
                "ciudad": "Pueblo Nuevo Falcón",
                "capital": 0,

            },
            {
                "id_ciudad": 171,
                "id_estado": 10,
                "ciudad": "Puerto Cumarebo",
                "capital": 0,

            },
            {
                "id_ciudad": 172,
                "id_estado": 10,
                "ciudad": "Punta Cardón",
                "capital": 0,

            },
            {
                "id_ciudad": 173,
                "id_estado": 10,
                "ciudad": "Punto Fijo",
                "capital": 0,

            },
            {
                "id_ciudad": 174,
                "id_estado": 10,
                "ciudad": "San Juan de Los Cayos",
                "capital": 0,

            },
            {
                "id_ciudad": 175,
                "id_estado": 10,
                "ciudad": "San Luis",
                "capital": 0,

            },
            {
                "id_ciudad": 176,
                "id_estado": 10,
                "ciudad": "Santa Ana Falcón",
                "capital": 0,

            },
            {
                "id_ciudad": 177,
                "id_estado": 10,
                "ciudad": "Santa Cruz De Bucaral",
                "capital": 0,

            },
            {
                "id_ciudad": 178,
                "id_estado": 10,
                "ciudad": "Tocopero",
                "capital": 0,

            },
            {
                "id_ciudad": 179,
                "id_estado": 10,
                "ciudad": "Tocuyo de La Costa",
                "capital": 0,

            },
            {
                "id_ciudad": 180,
                "id_estado": 10,
                "ciudad": "Tucacas",
                "capital": 0,

            },
            {
                "id_ciudad": 181,
                "id_estado": 10,
                "ciudad": "Yaracal",
                "capital": 0,

            },
            {
                "id_ciudad": 182,
                "id_estado": 11,
                "ciudad": "Altagracia de Orituco",
                "capital": 0,

            },
            {
                "id_ciudad": 183,
                "id_estado": 11,
                "ciudad": "Cabruta",
                "capital": 0,

            },
            {
                "id_ciudad": 184,
                "id_estado": 11,
                "ciudad": "Calabozo",
                "capital": 0,

            },
            {
                "id_ciudad": 185,
                "id_estado": 11,
                "ciudad": "Camaguán",
                "capital": 0,

            },
            {
                "id_ciudad": 196,
                "id_estado": 11,
                "ciudad": "Chaguaramas Guárico",
                "capital": 0,

            },
            {
                "id_ciudad": 197,
                "id_estado": 11,
                "ciudad": "El Socorro",
                "capital": 0,

            },
            {
                "id_ciudad": 198,
                "id_estado": 11,
                "ciudad": "El Sombrero",
                "capital": 0,

            },
            {
                "id_ciudad": 199,
                "id_estado": 11,
                "ciudad": "Las Mercedes de Los Llanos",
                "capital": 0,

            },
            {
                "id_ciudad": 200,
                "id_estado": 11,
                "ciudad": "Lezama",
                "capital": 0,

            },
            {
                "id_ciudad": 201,
                "id_estado": 11,
                "ciudad": "Onoto",
                "capital": 0,

            },
            {
                "id_ciudad": 202,
                "id_estado": 11,
                "ciudad": "Ortíz",
                "capital": 0,

            },
            {
                "id_ciudad": 203,
                "id_estado": 11,
                "ciudad": "San José de Guaribe",
                "capital": 0,

            },
            {
                "id_ciudad": 204,
                "id_estado": 11,
                "ciudad": "San Juan de Los Morros",
                "capital": 1,

            },
            {
                "id_ciudad": 205,
                "id_estado": 11,
                "ciudad": "San Rafael de Laya",
                "capital": 0,

            },
            {
                "id_ciudad": 206,
                "id_estado": 11,
                "ciudad": "Santa María de Ipire",
                "capital": 0,

            },
            {
                "id_ciudad": 207,
                "id_estado": 11,
                "ciudad": "Tucupido",
                "capital": 0,

            },
            {
                "id_ciudad": 208,
                "id_estado": 11,
                "ciudad": "Valle de La Pascua",
                "capital": 0,

            },
            {
                "id_ciudad": 209,
                "id_estado": 11,
                "ciudad": "Zaraza",
                "capital": 0,

            },
            {
                "id_ciudad": 210,
                "id_estado": 12,
                "ciudad": "Aguada Grande",
                "capital": 0,

            },
            {
                "id_ciudad": 211,
                "id_estado": 12,
                "ciudad": "Atarigua",
                "capital": 0,

            },
            {
                "id_ciudad": 212,
                "id_estado": 12,
                "ciudad": "Barquisimeto",
                "capital": 1,

            },
            {
                "id_ciudad": 213,
                "id_estado": 12,
                "ciudad": "Bobare",
                "capital": 0,

            },
            {
                "id_ciudad": 214,
                "id_estado": 12,
                "ciudad": "Cabudare",
                "capital": 0,

            },
            {
                "id_ciudad": 215,
                "id_estado": 12,
                "ciudad": "Carora",
                "capital": 0,

            },
            {
                "id_ciudad": 216,
                "id_estado": 12,
                "ciudad": "Cubiro",
                "capital": 0,

            },
            {
                "id_ciudad": 217,
                "id_estado": 12,
                "ciudad": "Cují",
                "capital": 0,

            },
            {
                "id_ciudad": 218,
                "id_estado": 12,
                "ciudad": "Duaca",
                "capital": 0,

            },
            {
                "id_ciudad": 219,
                "id_estado": 12,
                "ciudad": "El Manzano",
                "capital": 0,

            },
            {
                "id_ciudad": 220,
                "id_estado": 12,
                "ciudad": "El Tocuyo",
                "capital": 0,

            },
            {
                "id_ciudad": 221,
                "id_estado": 12,
                "ciudad": "Guaríco",
                "capital": 0,

            },
            {
                "id_ciudad": 222,
                "id_estado": 12,
                "ciudad": "Humocaro Alto",
                "capital": 0,

            },
            {
                "id_ciudad": 223,
                "id_estado": 12,
                "ciudad": "Humocaro Bajo",
                "capital": 0,

            },
            {
                "id_ciudad": 224,
                "id_estado": 12,
                "ciudad": "La Miel",
                "capital": 0,

            },
            {
                "id_ciudad": 225,
                "id_estado": 12,
                "ciudad": "Moroturo",
                "capital": 0,

            },
            {
                "id_ciudad": 226,
                "id_estado": 12,
                "ciudad": "Quíbor",
                "capital": 0,

            },
            {
                "id_ciudad": 227,
                "id_estado": 12,
                "ciudad": "Río Claro",
                "capital": 0,

            },
            {
                "id_ciudad": 228,
                "id_estado": 12,
                "ciudad": "Sanare",
                "capital": 0,

            },
            {
                "id_ciudad": 229,
                "id_estado": 12,
                "ciudad": "Santa Inés",
                "capital": 0,

            },
            {
                "id_ciudad": 230,
                "id_estado": 12,
                "ciudad": "Sarare",
                "capital": 0,

            },
            {
                "id_ciudad": 231,
                "id_estado": 12,
                "ciudad": "Siquisique",
                "capital": 0,

            },
            {
                "id_ciudad": 232,
                "id_estado": 12,
                "ciudad": "Tintorero",
                "capital": 0,

            },
            {
                "id_ciudad": 233,
                "id_estado": 13,
                "ciudad": "Apartaderos Mérida",
                "capital": 0,

            },
            {
                "id_ciudad": 234,
                "id_estado": 13,
                "ciudad": "Arapuey",
                "capital": 0,

            },
            {
                "id_ciudad": 235,
                "id_estado": 13,
                "ciudad": "Bailadores",
                "capital": 0,

            },
            {
                "id_ciudad": 236,
                "id_estado": 13,
                "ciudad": "Caja Seca",
                "capital": 0,

            },
            {
                "id_ciudad": 237,
                "id_estado": 13,
                "ciudad": "Canaguá",
                "capital": 0,

            },
            {
                "id_ciudad": 238,
                "id_estado": 13,
                "ciudad": "Chachopo",
                "capital": 0,

            },
            {
                "id_ciudad": 239,
                "id_estado": 13,
                "ciudad": "Chiguara",
                "capital": 0,

            },
            {
                "id_ciudad": 240,
                "id_estado": 13,
                "ciudad": "Ejido",
                "capital": 0,

            },
            {
                "id_ciudad": 241,
                "id_estado": 13,
                "ciudad": "El Vigía",
                "capital": 0,

            },
            {
                "id_ciudad": 242,
                "id_estado": 13,
                "ciudad": "La Azulita",
                "capital": 0,

            },
            {
                "id_ciudad": 243,
                "id_estado": 13,
                "ciudad": "La Playa",
                "capital": 0,

            },
            {
                "id_ciudad": 244,
                "id_estado": 13,
                "ciudad": "Lagunillas Mérida",
                "capital": 0,

            },
            {
                "id_ciudad": 245,
                "id_estado": 13,
                "ciudad": "Mérida",
                "capital": 1,

            },
            {
                "id_ciudad": 246,
                "id_estado": 13,
                "ciudad": "Mesa de Bolívar",
                "capital": 0,

            },
            {
                "id_ciudad": 247,
                "id_estado": 13,
                "ciudad": "Mucuchíes",
                "capital": 0,

            },
            {
                "id_ciudad": 248,
                "id_estado": 13,
                "ciudad": "Mucujepe",
                "capital": 0,

            },
            {
                "id_ciudad": 249,
                "id_estado": 13,
                "ciudad": "Mucuruba",
                "capital": 0,

            },
            {
                "id_ciudad": 250,
                "id_estado": 13,
                "ciudad": "Nueva Bolivia",
                "capital": 0,

            },
            {
                "id_ciudad": 251,
                "id_estado": 13,
                "ciudad": "Palmarito",
                "capital": 0,

            },
            {
                "id_ciudad": 252,
                "id_estado": 13,
                "ciudad": "Pueblo Llano",
                "capital": 0,

            },
            {
                "id_ciudad": 253,
                "id_estado": 13,
                "ciudad": "Santa Cruz de Mora",
                "capital": 0,

            },
            {
                "id_ciudad": 254,
                "id_estado": 13,
                "ciudad": "Santa Elena de Arenales",
                "capital": 0,

            },
            {
                "id_ciudad": 255,
                "id_estado": 13,
                "ciudad": "Santo Domingo",
                "capital": 0,

            },
            {
                "id_ciudad": 256,
                "id_estado": 13,
                "ciudad": "Tabáy",
                "capital": 0,

            },
            {
                "id_ciudad": 257,
                "id_estado": 13,
                "ciudad": "Timotes",
                "capital": 0,

            },
            {
                "id_ciudad": 258,
                "id_estado": 13,
                "ciudad": "Torondoy",
                "capital": 0,

            },
            {
                "id_ciudad": 259,
                "id_estado": 13,
                "ciudad": "Tovar",
                "capital": 0,

            },
            {
                "id_ciudad": 260,
                "id_estado": 13,
                "ciudad": "Tucani",
                "capital": 0,

            },
            {
                "id_ciudad": 261,
                "id_estado": 13,
                "ciudad": "Zea",
                "capital": 0,

            },
            {
                "id_ciudad": 262,
                "id_estado": 14,
                "ciudad": "Araguita",
                "capital": 0,

            },
            {
                "id_ciudad": 263,
                "id_estado": 14,
                "ciudad": "Carrizal",
                "capital": 0,

            },
            {
                "id_ciudad": 264,
                "id_estado": 14,
                "ciudad": "Caucagua",
                "capital": 0,

            },
            {
                "id_ciudad": 265,
                "id_estado": 14,
                "ciudad": "Chaguaramas Miranda",
                "capital": 0,

            },
            {
                "id_ciudad": 266,
                "id_estado": 14,
                "ciudad": "Charallave",
                "capital": 0,

            },
            {
                "id_ciudad": 267,
                "id_estado": 14,
                "ciudad": "Chirimena",
                "capital": 0,

            },
            {
                "id_ciudad": 268,
                "id_estado": 14,
                "ciudad": "Chuspa",
                "capital": 0,

            },
            {
                "id_ciudad": 269,
                "id_estado": 14,
                "ciudad": "Cúa",
                "capital": 0,

            },
            {
                "id_ciudad": 270,
                "id_estado": 14,
                "ciudad": "Cupira",
                "capital": 0,

            },
            {
                "id_ciudad": 271,
                "id_estado": 14,
                "ciudad": "Curiepe",
                "capital": 0,

            },
            {
                "id_ciudad": 272,
                "id_estado": 14,
                "ciudad": "El Guapo",
                "capital": 0,

            },
            {
                "id_ciudad": 273,
                "id_estado": 14,
                "ciudad": "El Jarillo",
                "capital": 0,

            },
            {
                "id_ciudad": 274,
                "id_estado": 14,
                "ciudad": "Filas de Mariche",
                "capital": 0,

            },
            {
                "id_ciudad": 275,
                "id_estado": 14,
                "ciudad": "Guarenas",
                "capital": 0,

            },
            {
                "id_ciudad": 276,
                "id_estado": 14,
                "ciudad": "Guatire",
                "capital": 0,

            },
            {
                "id_ciudad": 277,
                "id_estado": 14,
                "ciudad": "Higuerote",
                "capital": 0,

            },
            {
                "id_ciudad": 278,
                "id_estado": 14,
                "ciudad": "Los Anaucos",
                "capital": 0,

            },
            {
                "id_ciudad": 279,
                "id_estado": 14,
                "ciudad": "Los Teques",
                "capital": 1,

            },
            {
                "id_ciudad": 280,
                "id_estado": 14,
                "ciudad": "Ocumare del Tuy",
                "capital": 0,

            },
            {
                "id_ciudad": 281,
                "id_estado": 14,
                "ciudad": "Panaquire",
                "capital": 0,

            },
            {
                "id_ciudad": 282,
                "id_estado": 14,
                "ciudad": "Paracotos",
                "capital": 0,

            },
            {
                "id_ciudad": 283,
                "id_estado": 14,
                "ciudad": "Río Chico",
                "capital": 0,

            },
            {
                "id_ciudad": 284,
                "id_estado": 14,
                "ciudad": "San Antonio de Los Altos",
                "capital": 0,

            },
            {
                "id_ciudad": 285,
                "id_estado": 14,
                "ciudad": "San Diego de Los Altos",
                "capital": 0,

            },
            {
                "id_ciudad": 286,
                "id_estado": 14,
                "ciudad": "San Fernando del Guapo",
                "capital": 0,

            },
            {
                "id_ciudad": 287,
                "id_estado": 14,
                "ciudad": "San Francisco de Yare",
                "capital": 0,

            },
            {
                "id_ciudad": 288,
                "id_estado": 14,
                "ciudad": "San José de Los Altos",
                "capital": 0,

            },
            {
                "id_ciudad": 289,
                "id_estado": 14,
                "ciudad": "San José de Río Chico",
                "capital": 0,

            },
            {
                "id_ciudad": 290,
                "id_estado": 14,
                "ciudad": "San Pedro de Los Altos",
                "capital": 0,

            },
            {
                "id_ciudad": 291,
                "id_estado": 14,
                "ciudad": "Santa Lucía",
                "capital": 0,

            },
            {
                "id_ciudad": 292,
                "id_estado": 14,
                "ciudad": "Santa Teresa",
                "capital": 0,

            },
            {
                "id_ciudad": 293,
                "id_estado": 14,
                "ciudad": "Tacarigua de La Laguna",
                "capital": 0,

            },
            {
                "id_ciudad": 294,
                "id_estado": 14,
                "ciudad": "Tacarigua de Mamporal",
                "capital": 0,

            },
            {
                "id_ciudad": 295,
                "id_estado": 14,
                "ciudad": "Tácata",
                "capital": 0,

            },
            {
                "id_ciudad": 296,
                "id_estado": 14,
                "ciudad": "Turumo",
                "capital": 0,

            },
            {
                "id_ciudad": 297,
                "id_estado": 15,
                "ciudad": "Aguasay",
                "capital": 0,

            },
            {
                "id_ciudad": 298,
                "id_estado": 15,
                "ciudad": "Aragua de Maturín",
                "capital": 0,

            },
            {
                "id_ciudad": 299,
                "id_estado": 15,
                "ciudad": "Barrancas del Orinoco",
                "capital": 0,

            },
            {
                "id_ciudad": 300,
                "id_estado": 15,
                "ciudad": "Caicara de Maturín",
                "capital": 0,

            },
            {
                "id_ciudad": 301,
                "id_estado": 15,
                "ciudad": "Caripe",
                "capital": 0,

            },
            {
                "id_ciudad": 302,
                "id_estado": 15,
                "ciudad": "Caripito",
                "capital": 0,

            },
            {
                "id_ciudad": 303,
                "id_estado": 15,
                "ciudad": "Chaguaramal",
                "capital": 0,

            },
            {
                "id_ciudad": 305,
                "id_estado": 15,
                "ciudad": "Chaguaramas Monagas",
                "capital": 0,

            },
            {
                "id_ciudad": 307,
                "id_estado": 15,
                "ciudad": "El Furrial",
                "capital": 0,

            },
            {
                "id_ciudad": 308,
                "id_estado": 15,
                "ciudad": "El Tejero",
                "capital": 0,

            },
            {
                "id_ciudad": 309,
                "id_estado": 15,
                "ciudad": "Jusepín",
                "capital": 0,

            },
            {
                "id_ciudad": 310,
                "id_estado": 15,
                "ciudad": "La Toscana",
                "capital": 0,

            },
            {
                "id_ciudad": 311,
                "id_estado": 15,
                "ciudad": "Maturín",
                "capital": 1,

            },
            {
                "id_ciudad": 312,
                "id_estado": 15,
                "ciudad": "Miraflores",
                "capital": 0,

            },
            {
                "id_ciudad": 313,
                "id_estado": 15,
                "ciudad": "Punta de Mata",
                "capital": 0,

            },
            {
                "id_ciudad": 314,
                "id_estado": 15,
                "ciudad": "Quiriquire",
                "capital": 0,

            },
            {
                "id_ciudad": 315,
                "id_estado": 15,
                "ciudad": "San Antonio de Maturín",
                "capital": 0,

            },
            {
                "id_ciudad": 316,
                "id_estado": 15,
                "ciudad": "San Vicente Monagas",
                "capital": 0,

            },
            {
                "id_ciudad": 317,
                "id_estado": 15,
                "ciudad": "Santa Bárbara",
                "capital": 0,

            },
            {
                "id_ciudad": 318,
                "id_estado": 15,
                "ciudad": "Temblador",
                "capital": 0,

            },
            {
                "id_ciudad": 319,
                "id_estado": 15,
                "ciudad": "Teresen",
                "capital": 0,

            },
            {
                "id_ciudad": 320,
                "id_estado": 15,
                "ciudad": "Uracoa",
                "capital": 0,

            },
            {
                "id_ciudad": 321,
                "id_estado": 16,
                "ciudad": "Altagracia",
                "capital": 0,

            },
            {
                "id_ciudad": 322,
                "id_estado": 16,
                "ciudad": "Boca de Pozo",
                "capital": 0,

            },
            {
                "id_ciudad": 323,
                "id_estado": 16,
                "ciudad": "Boca de Río",
                "capital": 0,

            },
            {
                "id_ciudad": 324,
                "id_estado": 16,
                "ciudad": "El Espinal",
                "capital": 0,

            },
            {
                "id_ciudad": 325,
                "id_estado": 16,
                "ciudad": "El Valle del Espíritu Santo",
                "capital": 0,

            },
            {
                "id_ciudad": 326,
                "id_estado": 16,
                "ciudad": "El Yaque",
                "capital": 0,

            },
            {
                "id_ciudad": 327,
                "id_estado": 16,
                "ciudad": "Juangriego",
                "capital": 0,

            },
            {
                "id_ciudad": 328,
                "id_estado": 16,
                "ciudad": "La Asunción",
                "capital": 1,

            },
            {
                "id_ciudad": 329,
                "id_estado": 16,
                "ciudad": "La Guardia",
                "capital": 0,

            },
            {
                "id_ciudad": 330,
                "id_estado": 16,
                "ciudad": "Pampatar",
                "capital": 0,

            },
            {
                "id_ciudad": 331,
                "id_estado": 16,
                "ciudad": "Porlamar",
                "capital": 0,

            },
            {
                "id_ciudad": 332,
                "id_estado": 16,
                "ciudad": "Puerto Fermín",
                "capital": 0,

            },
            {
                "id_ciudad": 333,
                "id_estado": 16,
                "ciudad": "Punta de Piedras",
                "capital": 0,

            },
            {
                "id_ciudad": 334,
                "id_estado": 16,
                "ciudad": "San Francisco de Macanao",
                "capital": 0,

            },
            {
                "id_ciudad": 335,
                "id_estado": 16,
                "ciudad": "San Juan Bautista",
                "capital": 0,

            },
            {
                "id_ciudad": 336,
                "id_estado": 16,
                "ciudad": "San Pedro de Coche",
                "capital": 0,

            },
            {
                "id_ciudad": 337,
                "id_estado": 16,
                "ciudad": "Santa Ana de Nueva Esparta",
                "capital": 0,

            },
            {
                "id_ciudad": 338,
                "id_estado": 16,
                "ciudad": "Villa Rosa",
                "capital": 0,

            },
            {
                "id_ciudad": 339,
                "id_estado": 17,
                "ciudad": "Acarigua",
                "capital": 0,

            },
            {
                "id_ciudad": 340,
                "id_estado": 17,
                "ciudad": "Agua Blanca",
                "capital": 0,

            },
            {
                "id_ciudad": 341,
                "id_estado": 17,
                "ciudad": "Araure",
                "capital": 0,

            },
            {
                "id_ciudad": 342,
                "id_estado": 17,
                "ciudad": "Biscucuy",
                "capital": 0,

            },
            {
                "id_ciudad": 343,
                "id_estado": 17,
                "ciudad": "Boconoito",
                "capital": 0,

            },
            {
                "id_ciudad": 344,
                "id_estado": 17,
                "ciudad": "Campo Elías",
                "capital": 0,

            },
            {
                "id_ciudad": 345,
                "id_estado": 17,
                "ciudad": "Chabasquén",
                "capital": 0,

            },
            {
                "id_ciudad": 346,
                "id_estado": 17,
                "ciudad": "Guanare",
                "capital": 1,

            },
            {
                "id_ciudad": 347,
                "id_estado": 17,
                "ciudad": "Guanarito",
                "capital": 0,

            },
            {
                "id_ciudad": 348,
                "id_estado": 17,
                "ciudad": "La Aparición",
                "capital": 0,

            },
            {
                "id_ciudad": 349,
                "id_estado": 17,
                "ciudad": "La Misión",
                "capital": 0,

            },
            {
                "id_ciudad": 350,
                "id_estado": 17,
                "ciudad": "Mesa de Cavacas",
                "capital": 0,

            },
            {
                "id_ciudad": 351,
                "id_estado": 17,
                "ciudad": "Ospino",
                "capital": 0,

            },
            {
                "id_ciudad": 352,
                "id_estado": 17,
                "ciudad": "Papelón",
                "capital": 0,

            },
            {
                "id_ciudad": 353,
                "id_estado": 17,
                "ciudad": "Payara",
                "capital": 0,

            },
            {
                "id_ciudad": 354,
                "id_estado": 17,
                "ciudad": "Pimpinela",
                "capital": 0,

            },
            {
                "id_ciudad": 355,
                "id_estado": 17,
                "ciudad": "Píritu de Portuguesa",
                "capital": 0,

            },
            {
                "id_ciudad": 356,
                "id_estado": 17,
                "ciudad": "San Rafael de Onoto",
                "capital": 0,

            },
            {
                "id_ciudad": 357,
                "id_estado": 17,
                "ciudad": "Santa Rosalía",
                "capital": 0,

            },
            {
                "id_ciudad": 358,
                "id_estado": 17,
                "ciudad": "Turén",
                "capital": 0,

            },
            {
                "id_ciudad": 359,
                "id_estado": 18,
                "ciudad": "Altos de Sucre",
                "capital": 0,

            },
            {
                "id_ciudad": 360,
                "id_estado": 18,
                "ciudad": "Araya",
                "capital": 0,

            },
            {
                "id_ciudad": 361,
                "id_estado": 18,
                "ciudad": "Cariaco",
                "capital": 0,

            },
            {
                "id_ciudad": 362,
                "id_estado": 18,
                "ciudad": "Carúpano",
                "capital": 0,

            },
            {
                "id_ciudad": 363,
                "id_estado": 18,
                "ciudad": "Casanay",
                "capital": 0,

            },
            {
                "id_ciudad": 364,
                "id_estado": 18,
                "ciudad": "Cumaná",
                "capital": 1,

            },
            {
                "id_ciudad": 365,
                "id_estado": 18,
                "ciudad": "Cumanacoa",
                "capital": 0,

            },
            {
                "id_ciudad": 366,
                "id_estado": 18,
                "ciudad": "El Morro Puerto Santo",
                "capital": 0,

            },
            {
                "id_ciudad": 367,
                "id_estado": 18,
                "ciudad": "El Pilar",
                "capital": 0,

            },
            {
                "id_ciudad": 368,
                "id_estado": 18,
                "ciudad": "El Poblado",
                "capital": 0,

            },
            {
                "id_ciudad": 369,
                "id_estado": 18,
                "ciudad": "Guaca",
                "capital": 0,

            },
            {
                "id_ciudad": 370,
                "id_estado": 18,
                "ciudad": "Guiria",
                "capital": 0,

            },
            {
                "id_ciudad": 371,
                "id_estado": 18,
                "ciudad": "Irapa",
                "capital": 0,

            },
            {
                "id_ciudad": 372,
                "id_estado": 18,
                "ciudad": "Manicuare",
                "capital": 0,

            },
            {
                "id_ciudad": 373,
                "id_estado": 18,
                "ciudad": "Mariguitar",
                "capital": 0,

            },
            {
                "id_ciudad": 374,
                "id_estado": 18,
                "ciudad": "Río Caribe",
                "capital": 0,

            },
            {
                "id_ciudad": 375,
                "id_estado": 18,
                "ciudad": "San Antonio del Golfo",
                "capital": 0,

            },
            {
                "id_ciudad": 376,
                "id_estado": 18,
                "ciudad": "San José de Aerocuar",
                "capital": 0,

            },
            {
                "id_ciudad": 377,
                "id_estado": 18,
                "ciudad": "San Vicente de Sucre",
                "capital": 0,

            },
            {
                "id_ciudad": 378,
                "id_estado": 18,
                "ciudad": "Santa Fe de Sucre",
                "capital": 0,

            },
            {
                "id_ciudad": 379,
                "id_estado": 18,
                "ciudad": "Tunapuy",
                "capital": 0,

            },
            {
                "id_ciudad": 380,
                "id_estado": 18,
                "ciudad": "Yaguaraparo",
                "capital": 0,

            },
            {
                "id_ciudad": 381,
                "id_estado": 18,
                "ciudad": "Yoco",
                "capital": 0,

            },
            {
                "id_ciudad": 382,
                "id_estado": 19,
                "ciudad": "Abejales",
                "capital": 0,

            },
            {
                "id_ciudad": 383,
                "id_estado": 19,
                "ciudad": "Borota",
                "capital": 0,

            },
            {
                "id_ciudad": 384,
                "id_estado": 19,
                "ciudad": "Bramon",
                "capital": 0,

            },
            {
                "id_ciudad": 385,
                "id_estado": 19,
                "ciudad": "Capacho",
                "capital": 0,

            },
            {
                "id_ciudad": 386,
                "id_estado": 19,
                "ciudad": "Colón",
                "capital": 0,

            },
            {
                "id_ciudad": 387,
                "id_estado": 19,
                "ciudad": "Coloncito",
                "capital": 0,

            },
            {
                "id_ciudad": 388,
                "id_estado": 19,
                "ciudad": "Cordero",
                "capital": 0,

            },
            {
                "id_ciudad": 389,
                "id_estado": 19,
                "ciudad": "El Cobre",
                "capital": 0,

            },
            {
                "id_ciudad": 390,
                "id_estado": 19,
                "ciudad": "El Pinal",
                "capital": 0,

            },
            {
                "id_ciudad": 391,
                "id_estado": 19,
                "ciudad": "Independencia",
                "capital": 0,

            },
            {
                "id_ciudad": 392,
                "id_estado": 19,
                "ciudad": "La Fría",
                "capital": 0,

            },
            {
                "id_ciudad": 393,
                "id_estado": 19,
                "ciudad": "La Grita",
                "capital": 0,

            },
            {
                "id_ciudad": 394,
                "id_estado": 19,
                "ciudad": "La Pedrera",
                "capital": 0,

            },
            {
                "id_ciudad": 395,
                "id_estado": 19,
                "ciudad": "La Tendida",
                "capital": 0,

            },
            {
                "id_ciudad": 396,
                "id_estado": 19,
                "ciudad": "Las Delicias",
                "capital": 0,

            },
            {
                "id_ciudad": 397,
                "id_estado": 19,
                "ciudad": "Las Hernández",
                "capital": 0,

            },
            {
                "id_ciudad": 398,
                "id_estado": 19,
                "ciudad": "Lobatera",
                "capital": 0,

            },
            {
                "id_ciudad": 399,
                "id_estado": 19,
                "ciudad": "Michelena",
                "capital": 0,

            },
            {
                "id_ciudad": 400,
                "id_estado": 19,
                "ciudad": "Palmira",
                "capital": 0,

            },
            {
                "id_ciudad": 401,
                "id_estado": 19,
                "ciudad": "Pregonero",
                "capital": 0,

            },
            {
                "id_ciudad": 402,
                "id_estado": 19,
                "ciudad": "Queniquea",
                "capital": 0,

            },
            {
                "id_ciudad": 403,
                "id_estado": 19,
                "ciudad": "Rubio",
                "capital": 0,

            },
            {
                "id_ciudad": 404,
                "id_estado": 19,
                "ciudad": "San Antonio del Tachira",
                "capital": 0,

            },
            {
                "id_ciudad": 405,
                "id_estado": 19,
                "ciudad": "San Cristobal",
                "capital": 1,

            },
            {
                "id_ciudad": 406,
                "id_estado": 19,
                "ciudad": "San José de Bolívar",
                "capital": 0,

            },
            {
                "id_ciudad": 407,
                "id_estado": 19,
                "ciudad": "San Josecito",
                "capital": 0,

            },
            {
                "id_ciudad": 408,
                "id_estado": 19,
                "ciudad": "San Pedro del Río",
                "capital": 0,

            },
            {
                "id_ciudad": 409,
                "id_estado": 19,
                "ciudad": "Santa Ana Táchira",
                "capital": 0,

            },
            {
                "id_ciudad": 410,
                "id_estado": 19,
                "ciudad": "Seboruco",
                "capital": 0,

            },
            {
                "id_ciudad": 411,
                "id_estado": 19,
                "ciudad": "Táriba",
                "capital": 0,

            },
            {
                "id_ciudad": 412,
                "id_estado": 19,
                "ciudad": "Umuquena",
                "capital": 0,

            },
            {
                "id_ciudad": 413,
                "id_estado": 19,
                "ciudad": "Ureña",
                "capital": 0,

            },
            {
                "id_ciudad": 414,
                "id_estado": 20,
                "ciudad": "Batatal",
                "capital": 0,

            },
            {
                "id_ciudad": 415,
                "id_estado": 20,
                "ciudad": "Betijoque",
                "capital": 0,

            },
            {
                "id_ciudad": 416,
                "id_estado": 20,
                "ciudad": "Boconó",
                "capital": 0,

            },
            {
                "id_ciudad": 417,
                "id_estado": 20,
                "ciudad": "Carache",
                "capital": 0,

            },
            {
                "id_ciudad": 418,
                "id_estado": 20,
                "ciudad": "Chejende",
                "capital": 0,

            },
            {
                "id_ciudad": 419,
                "id_estado": 20,
                "ciudad": "Cuicas",
                "capital": 0,

            },
            {
                "id_ciudad": 420,
                "id_estado": 20,
                "ciudad": "El Dividive",
                "capital": 0,

            },
            {
                "id_ciudad": 421,
                "id_estado": 20,
                "ciudad": "El Jaguito",
                "capital": 0,

            },
            {
                "id_ciudad": 422,
                "id_estado": 20,
                "ciudad": "Escuque",
                "capital": 0,

            },
            {
                "id_ciudad": 423,
                "id_estado": 20,
                "ciudad": "Isnotú",
                "capital": 0,

            },
            {
                "id_ciudad": 424,
                "id_estado": 20,
                "ciudad": "Jajó",
                "capital": 0,

            },
            {
                "id_ciudad": 425,
                "id_estado": 20,
                "ciudad": "La Ceiba",
                "capital": 0,

            },
            {
                "id_ciudad": 426,
                "id_estado": 20,
                "ciudad": "La Concepción de Trujllo",
                "capital": 0,

            },
            {
                "id_ciudad": 427,
                "id_estado": 20,
                "ciudad": "La Mesa de Esnujaque",
                "capital": 0,

            },
            {
                "id_ciudad": 428,
                "id_estado": 20,
                "ciudad": "La Puerta",
                "capital": 0,

            },
            {
                "id_ciudad": 429,
                "id_estado": 20,
                "ciudad": "La Quebrada",
                "capital": 0,

            },
            {
                "id_ciudad": 430,
                "id_estado": 20,
                "ciudad": "Mendoza Fría",
                "capital": 0,

            },
            {
                "id_ciudad": 431,
                "id_estado": 20,
                "ciudad": "Meseta de Chimpire",
                "capital": 0,

            },
            {
                "id_ciudad": 432,
                "id_estado": 20,
                "ciudad": "Monay",
                "capital": 0,

            },
            {
                "id_ciudad": 433,
                "id_estado": 20,
                "ciudad": "Motatán",
                "capital": 0,

            },
            {
                "id_ciudad": 434,
                "id_estado": 20,
                "ciudad": "Pampán",
                "capital": 0,

            },
            {
                "id_ciudad": 435,
                "id_estado": 20,
                "ciudad": "Pampanito",
                "capital": 0,

            },
            {
                "id_ciudad": 436,
                "id_estado": 20,
                "ciudad": "Sabana de Mendoza",
                "capital": 0,

            },
            {
                "id_ciudad": 437,
                "id_estado": 20,
                "ciudad": "San Lázaro",
                "capital": 0,

            },
            {
                "id_ciudad": 438,
                "id_estado": 20,
                "ciudad": "Santa Ana de Trujillo",
                "capital": 0,

            },
            {
                "id_ciudad": 439,
                "id_estado": 20,
                "ciudad": "Tostós",
                "capital": 0,

            },
            {
                "id_ciudad": 440,
                "id_estado": 20,
                "ciudad": "Trujillo",
                "capital": 1,

            },
            {
                "id_ciudad": 441,
                "id_estado": 20,
                "ciudad": "Valera",
                "capital": 0,

            },
            {
                "id_ciudad": 442,
                "id_estado": 21,
                "ciudad": "Carayaca",
                "capital": 0,

            },
            {
                "id_ciudad": 443,
                "id_estado": 21,
                "ciudad": "Litoral",
                "capital": 0,

            },
            {
                "id_ciudad": 444,
                "id_estado": 25,
                "ciudad": "Archipiélago Los Roques",
                "capital": 0,

            },
            {
                "id_ciudad": 445,
                "id_estado": 22,
                "ciudad": "Aroa",
                "capital": 0,

            },
            {
                "id_ciudad": 446,
                "id_estado": 22,
                "ciudad": "Boraure",
                "capital": 0,

            },
            {
                "id_ciudad": 447,
                "id_estado": 22,
                "ciudad": "Campo Elías de Yaracuy",
                "capital": 0,

            },
            {
                "id_ciudad": 448,
                "id_estado": 22,
                "ciudad": "Chivacoa",
                "capital": 0,

            },
            {
                "id_ciudad": 449,
                "id_estado": 22,
                "ciudad": "Cocorote",
                "capital": 0,

            },
            {
                "id_ciudad": 450,
                "id_estado": 22,
                "ciudad": "Farriar",
                "capital": 0,

            },
            {
                "id_ciudad": 451,
                "id_estado": 22,
                "ciudad": "Guama",
                "capital": 0,

            },
            {
                "id_ciudad": 452,
                "id_estado": 22,
                "ciudad": "Marín",
                "capital": 0,

            },
            {
                "id_ciudad": 453,
                "id_estado": 22,
                "ciudad": "Nirgua",
                "capital": 0,

            },
            {
                "id_ciudad": 454,
                "id_estado": 22,
                "ciudad": "Sabana de Parra",
                "capital": 0,

            },
            {
                "id_ciudad": 455,
                "id_estado": 22,
                "ciudad": "Salom",
                "capital": 0,

            },
            {
                "id_ciudad": 456,
                "id_estado": 22,
                "ciudad": "San Felipe",
                "capital": 1,

            },
            {
                "id_ciudad": 457,
                "id_estado": 22,
                "ciudad": "San Pablo de Yaracuy",
                "capital": 0,

            },
            {
                "id_ciudad": 458,
                "id_estado": 22,
                "ciudad": "Urachiche",
                "capital": 0,

            },
            {
                "id_ciudad": 459,
                "id_estado": 22,
                "ciudad": "Yaritagua",
                "capital": 0,

            },
            {
                "id_ciudad": 460,
                "id_estado": 22,
                "ciudad": "Yumare",
                "capital": 0,

            },
            {
                "id_ciudad": 461,
                "id_estado": 23,
                "ciudad": "Bachaquero",
                "capital": 0,

            },
            {
                "id_ciudad": 462,
                "id_estado": 23,
                "ciudad": "Bobures",
                "capital": 0,

            },
            {
                "id_ciudad": 463,
                "id_estado": 23,
                "ciudad": "Cabimas",
                "capital": 0,

            },
            {
                "id_ciudad": 464,
                "id_estado": 23,
                "ciudad": "Campo Concepción",
                "capital": 0,

            },
            {
                "id_ciudad": 465,
                "id_estado": 23,
                "ciudad": "Campo Mara",
                "capital": 0,

            },
            {
                "id_ciudad": 466,
                "id_estado": 23,
                "ciudad": "Campo Rojo",
                "capital": 0,

            },
            {
                "id_ciudad": 467,
                "id_estado": 23,
                "ciudad": "Carrasquero",
                "capital": 0,

            },
            {
                "id_ciudad": 468,
                "id_estado": 23,
                "ciudad": "Casigua",
                "capital": 0,

            },
            {
                "id_ciudad": 469,
                "id_estado": 23,
                "ciudad": "Chiquinquirá",
                "capital": 0,

            },
            {
                "id_ciudad": 470,
                "id_estado": 23,
                "ciudad": "Ciudad Ojeda",
                "capital": 0,

            },
            {
                "id_ciudad": 471,
                "id_estado": 23,
                "ciudad": "El Batey",
                "capital": 0,

            },
            {
                "id_ciudad": 472,
                "id_estado": 23,
                "ciudad": "El Carmelo",
                "capital": 0,

            },
            {
                "id_ciudad": 473,
                "id_estado": 23,
                "ciudad": "El Chivo",
                "capital": 0,

            },
            {
                "id_ciudad": 474,
                "id_estado": 23,
                "ciudad": "El Guayabo",
                "capital": 0,

            },
            {
                "id_ciudad": 475,
                "id_estado": 23,
                "ciudad": "El Mene",
                "capital": 0,

            },
            {
                "id_ciudad": 476,
                "id_estado": 23,
                "ciudad": "El Venado",
                "capital": 0,

            },
            {
                "id_ciudad": 477,
                "id_estado": 23,
                "ciudad": "Encontrados",
                "capital": 0,

            },
            {
                "id_ciudad": 478,
                "id_estado": 23,
                "ciudad": "Gibraltar",
                "capital": 0,

            },
            {
                "id_ciudad": 479,
                "id_estado": 23,
                "ciudad": "Isla de Toas",
                "capital": 0,

            },
            {
                "id_ciudad": 480,
                "id_estado": 23,
                "ciudad": "La Concepción del Zulia",
                "capital": 0,

            },
            {
                "id_ciudad": 481,
                "id_estado": 23,
                "ciudad": "La Paz",
                "capital": 0,

            },
            {
                "id_ciudad": 482,
                "id_estado": 23,
                "ciudad": "La Sierrita",
                "capital": 0,

            },
            {
                "id_ciudad": 483,
                "id_estado": 23,
                "ciudad": "Lagunillas del Zulia",
                "capital": 0,

            },
            {
                "id_ciudad": 484,
                "id_estado": 23,
                "ciudad": "Las Piedras de Perijá",
                "capital": 0,

            },
            {
                "id_ciudad": 485,
                "id_estado": 23,
                "ciudad": "Los Cortijos",
                "capital": 0,

            },
            {
                "id_ciudad": 486,
                "id_estado": 23,
                "ciudad": "Machiques",
                "capital": 0,

            },
            {
                "id_ciudad": 487,
                "id_estado": 23,
                "ciudad": "Maracaibo",
                "capital": 1,

            },
            {
                "id_ciudad": 488,
                "id_estado": 23,
                "ciudad": "Mene Grande",
                "capital": 0,

            },
            {
                "id_ciudad": 489,
                "id_estado": 23,
                "ciudad": "Palmarejo",
                "capital": 0,

            },
            {
                "id_ciudad": 490,
                "id_estado": 23,
                "ciudad": "Paraguaipoa",
                "capital": 0,

            },
            {
                "id_ciudad": 491,
                "id_estado": 23,
                "ciudad": "Potrerito",
                "capital": 0,

            },
            {
                "id_ciudad": 492,
                "id_estado": 23,
                "ciudad": "Pueblo Nuevo del Zulia",
                "capital": 0,

            },
            {
                "id_ciudad": 493,
                "id_estado": 23,
                "ciudad": "Puertos de Altagracia",
                "capital": 0,

            },
            {
                "id_ciudad": 494,
                "id_estado": 23,
                "ciudad": "Punta Gorda",
                "capital": 0,

            },
            {
                "id_ciudad": 495,
                "id_estado": 23,
                "ciudad": "Sabaneta de Palma",
                "capital": 0,

            },
            {
                "id_ciudad": 496,
                "id_estado": 23,
                "ciudad": "San Francisco",
                "capital": 0,

            },
            {
                "id_ciudad": 497,
                "id_estado": 23,
                "ciudad": "San José de Perijá",
                "capital": 0,

            },
            {
                "id_ciudad": 498,
                "id_estado": 23,
                "ciudad": "San Rafael del Moján",
                "capital": 0,

            },
            {
                "id_ciudad": 499,
                "id_estado": 23,
                "ciudad": "San Timoteo",
                "capital": 0,

            },
            {
                "id_ciudad": 500,
                "id_estado": 23,
                "ciudad": "Santa Bárbara Del Zulia",
                "capital": 0,

            },
            {
                "id_ciudad": 501,
                "id_estado": 23,
                "ciudad": "Santa Cruz de Mara",
                "capital": 0,

            },
            {
                "id_ciudad": 502,
                "id_estado": 23,
                "ciudad": "Santa Cruz del Zulia",
                "capital": 0,

            },
            {
                "id_ciudad": 503,
                "id_estado": 23,
                "ciudad": "Santa Rita",
                "capital": 0,

            },
            {
                "id_ciudad": 504,
                "id_estado": 23,
                "ciudad": "Sinamaica",
                "capital": 0,

            },
            {
                "id_ciudad": 505,
                "id_estado": 23,
                "ciudad": "Tamare",
                "capital": 0,

            },
            {
                "id_ciudad": 506,
                "id_estado": 23,
                "ciudad": "Tía Juana",
                "capital": 0,

            },
            {
                "id_ciudad": 507,
                "id_estado": 23,
                "ciudad": "Villa del Rosario",
                "capital": 0,

            },
            {
                "id_ciudad": 508,
                "id_estado": 21,
                "ciudad": "La Guaira",
                "capital": 1,

            },
            {
                "id_ciudad": 509,
                "id_estado": 21,
                "ciudad": "Catia La Mar",
                "capital": 0,

            },
            {
                "id_ciudad": 510,
                "id_estado": 21,
                "ciudad": "Macuto",
                "capital": 0,

            },
            {
                "id_ciudad": 511,
                "id_estado": 21,
                "ciudad": "Naiguatá",
                "capital": 0,

            },
            {
                "id_ciudad": 512,
                "id_estado": 25,
                "ciudad": "Archipiélago Los Monjes",
                "capital": 0,

            },
            {
                "id_ciudad": 513,
                "id_estado": 25,
                "ciudad": "Isla La Tortuga y Cayos adyacentes",
                "capital": 0,

            },
            {
                "id_ciudad": 514,
                "id_estado": 25,
                "ciudad": "Isla La Sola",
                "capital": 0,

            },
            {
                "id_ciudad": 515,
                "id_estado": 25,
                "ciudad": "Islas Los Testigos",
                "capital": 0,

            },
            {
                "id_ciudad": 516,
                "id_estado": 25,
                "ciudad": "Islas Los Frailes",
                "capital": 0,

            },
            {
                "id_ciudad": 517,
                "id_estado": 25,
                "ciudad": "Isla La Orchila",
                "capital": 0,

            },
            {
                "id_ciudad": 518,
                "id_estado": 25,
                "ciudad": "Archipiélago Las Aves",
                "capital": 0,

            },
            {
                "id_ciudad": 519,
                "id_estado": 25,
                "ciudad": "Isla de Aves",
                "capital": 0,

            },
            {
                "id_ciudad": 520,
                "id_estado": 25,
                "ciudad": "Isla La Blanquilla",
                "capital": 0,

            },
            {
                "id_ciudad": 521,
                "id_estado": 25,
                "ciudad": "Isla de Patos",
                "capital": 0,

            },
            {
                "id_ciudad": 522,
                "id_estado": 25,
                "ciudad": "Islas Los Hermanos",
                "capital": 0,

            }
        ]);

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('ciudades', null, {});
    }
};