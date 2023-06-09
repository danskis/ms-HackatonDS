"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinPOJO = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let CoinPOJO = class CoinPOJO extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.STRING,
        references: 'crypto_id'
    }),
    __metadata("design:type", String)
], CoinPOJO.prototype, "crypto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'crypto_name'
    }),
    __metadata("design:type", String)
], CoinPOJO.prototype, "crypto_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        references: 'email'
    }),
    __metadata("design:type", Number)
], CoinPOJO.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: 'createdAt'
    }),
    __metadata("design:type", Date)
], CoinPOJO.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: 'updatedAt'
    }),
    __metadata("design:type", Date)
], CoinPOJO.prototype, "updatedAt", void 0);
CoinPOJO = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        tableName: 'crypto_coins',
        schema: 'hackaton'
    })
], CoinPOJO);
exports.CoinPOJO = CoinPOJO;
