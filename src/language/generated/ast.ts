/******************************************************************************
 * This file was generated by langium-cli 2.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export const RobTerminals = {
    ID: /(\^?(([a-z]|[A-Z])|_)((([a-z]|[A-Z])|_)|[0-9])*)/,
    INT: /[0-9]+/,
    STRING: /(("((\\([\s\S]))|((?!(\\|"))[\s\S]*?))*")|('((\\([\s\S]))|((?!(\\|'))[\s\S]*?))*'))/,
    ML_COMMENT: /(\/\*([\s\S]*?\*\/))/,
    SL_COMMENT: /(\/\/((?!(\n|\r))[\s\S]*?)(\r?\n)?)/,
    WS: /((( |	)|\r)|\n)+/,
};

export type EBoolean = boolean;

export function isEBoolean(item: unknown): item is EBoolean {
    return typeof item === 'boolean';
}

export type EInt = number;

export function isEInt(item: unknown): item is EInt {
    return typeof item === 'number';
}

export type EString = string;

export function isEString(item: unknown): item is EString {
    return (typeof item === 'string' && (/(("((\\([\s\S]))|((?!(\\|"))[\s\S]*?))*")|('((\\([\s\S]))|((?!(\\|'))[\s\S]*?))*'))/.test(item) || /(\^?(([a-z]|[A-Z])|_)((([a-z]|[A-Z])|_)|[0-9])*)/.test(item)));
}

export type Mouvement = Mouvement_ARRIERE | Mouvement_AVANT | Mouvement_DROITE | Mouvement_GAUCHE;

export type Mouvement_ARRIERE = 'ARRIERE';

export type Mouvement_AVANT = 'AVANT';

export type Mouvement_DROITE = 'DROITE';

export type Mouvement_GAUCHE = 'GAUCHE';

export type Types = Types_Boolean | Types_Number | Types_Void;

export type Types_Boolean = 'Boolean';

export type Types_Number = 'Number';

export type Types_Void = 'Void';

export interface Expression extends AstNode {
    readonly $type: 'BinaryExpression' | 'ConstantBoolean' | 'ConstantInt' | 'DistanceCaptor' | 'Expression' | 'ProcCall' | 'Sensor' | 'ValCall';
}

export const Expression = 'Expression';

export function isExpression(item: unknown): item is Expression {
    return reflection.isInstance(item, Expression);
}

export interface ExpressionType extends AstNode {
    readonly $type: 'Addition' | 'And' | 'ExpressionType' | 'Greater' | 'Lower' | 'Multiplication' | 'Or' | 'Soustraction';
}

export const ExpressionType = 'ExpressionType';

export function isExpressionType(item: unknown): item is ExpressionType {
    return reflection.isInstance(item, ExpressionType);
}

export interface ProcDeclaration extends AstNode {
    readonly $container: Robot;
    readonly $type: 'ProcDeclaration';
    block?: Block
    name: string
    returnedType: Types
}

export const ProcDeclaration = 'ProcDeclaration';

export function isProcDeclaration(item: unknown): item is ProcDeclaration {
    return reflection.isInstance(item, ProcDeclaration);
}

export interface Robot extends AstNode {
    readonly $type: 'Robot';
    functions: ProcDeclaration
}

export const Robot = 'Robot';

export function isRobot(item: unknown): item is Robot {
    return reflection.isInstance(item, Robot);
}

export interface Statement extends AstNode {
    readonly $type: 'Assignation' | 'Block' | 'Clock' | 'ControlStructure' | 'CustomAction' | 'Deplacement' | 'If' | 'Repeat' | 'Speed' | 'Statement' | 'VarDeclaration' | 'While';
}

export const Statement = 'Statement';

export function isStatement(item: unknown): item is Statement {
    return reflection.isInstance(item, Statement);
}

export interface Unite extends AstNode {
    readonly $type: 'CM' | 'MM' | 'Unite';
}

export const Unite = 'Unite';

export function isUnite(item: unknown): item is Unite {
    return reflection.isInstance(item, Unite);
}

export interface BinaryExpression extends Expression {
    readonly $type: 'BinaryExpression';
    left: Expression
    operator: ExpressionType
    right: Expression
}

export const BinaryExpression = 'BinaryExpression';

export function isBinaryExpression(item: unknown): item is BinaryExpression {
    return reflection.isInstance(item, BinaryExpression);
}

export interface ConstantBoolean extends Expression {
    readonly $type: 'ConstantBoolean';
    value: boolean
}

export const ConstantBoolean = 'ConstantBoolean';

export function isConstantBoolean(item: unknown): item is ConstantBoolean {
    return reflection.isInstance(item, ConstantBoolean);
}

export interface ConstantInt extends Expression {
    readonly $type: 'ConstantInt';
    IntegerValue?: number
}

export const ConstantInt = 'ConstantInt';

export function isConstantInt(item: unknown): item is ConstantInt {
    return reflection.isInstance(item, ConstantInt);
}

export interface ProcCall extends Expression {
    readonly $type: 'ProcCall';
    arguments: Array<Expression>
    procdeclaration?: Reference<ProcDeclaration>
}

export const ProcCall = 'ProcCall';

export function isProcCall(item: unknown): item is ProcCall {
    return reflection.isInstance(item, ProcCall);
}

export interface Sensor extends Expression {
    readonly $type: 'DistanceCaptor' | 'Sensor';
    unite: Unite
}

export const Sensor = 'Sensor';

export function isSensor(item: unknown): item is Sensor {
    return reflection.isInstance(item, Sensor);
}

export interface ValCall extends Expression {
    readonly $container: Assignation;
    readonly $type: 'ValCall';
    vardeclaration?: Reference<VarDeclaration>
}

export const ValCall = 'ValCall';

export function isValCall(item: unknown): item is ValCall {
    return reflection.isInstance(item, ValCall);
}

export interface Addition extends ExpressionType {
    readonly $type: 'Addition';
}

export const Addition = 'Addition';

export function isAddition(item: unknown): item is Addition {
    return reflection.isInstance(item, Addition);
}

export interface And extends ExpressionType {
    readonly $type: 'And';
}

export const And = 'And';

export function isAnd(item: unknown): item is And {
    return reflection.isInstance(item, And);
}

export interface Greater extends ExpressionType {
    readonly $type: 'Greater';
}

export const Greater = 'Greater';

export function isGreater(item: unknown): item is Greater {
    return reflection.isInstance(item, Greater);
}

export interface Lower extends ExpressionType {
    readonly $type: 'Lower';
}

export const Lower = 'Lower';

export function isLower(item: unknown): item is Lower {
    return reflection.isInstance(item, Lower);
}

export interface Multiplication extends ExpressionType {
    readonly $type: 'Multiplication';
}

export const Multiplication = 'Multiplication';

export function isMultiplication(item: unknown): item is Multiplication {
    return reflection.isInstance(item, Multiplication);
}

export interface Or extends ExpressionType {
    readonly $type: 'Or';
}

export const Or = 'Or';

export function isOr(item: unknown): item is Or {
    return reflection.isInstance(item, Or);
}

export interface Soustraction extends ExpressionType {
    readonly $type: 'Soustraction';
}

export const Soustraction = 'Soustraction';

export function isSoustraction(item: unknown): item is Soustraction {
    return reflection.isInstance(item, Soustraction);
}

export interface Assignation extends Statement {
    readonly $type: 'Assignation';
    expression: Expression
    valcall: ValCall
}

export const Assignation = 'Assignation';

export function isAssignation(item: unknown): item is Assignation {
    return reflection.isInstance(item, Assignation);
}

export interface Block extends Statement {
    readonly $container: If | ProcDeclaration | Repeat | While;
    readonly $type: 'Block';
    statements: Array<Statement>
}

export const Block = 'Block';

export function isBlock(item: unknown): item is Block {
    return reflection.isInstance(item, Block);
}

export interface ControlStructure extends Statement {
    readonly $type: 'ControlStructure' | 'If' | 'Repeat' | 'While';
    condition?: Expression
}

export const ControlStructure = 'ControlStructure';

export function isControlStructure(item: unknown): item is ControlStructure {
    return reflection.isInstance(item, ControlStructure);
}

export interface CustomAction extends Statement {
    readonly $type: 'Clock' | 'CustomAction' | 'Deplacement' | 'Speed';
}

export const CustomAction = 'CustomAction';

export function isCustomAction(item: unknown): item is CustomAction {
    return reflection.isInstance(item, CustomAction);
}

export interface VarDeclaration extends Statement {
    readonly $type: 'VarDeclaration';
    expression: Expression
    name: string
    type: Types
}

export const VarDeclaration = 'VarDeclaration';

export function isVarDeclaration(item: unknown): item is VarDeclaration {
    return reflection.isInstance(item, VarDeclaration);
}

export interface CM extends Unite {
    readonly $type: 'CM';
}

export const CM = 'CM';

export function isCM(item: unknown): item is CM {
    return reflection.isInstance(item, CM);
}

export interface MM extends Unite {
    readonly $type: 'MM';
}

export const MM = 'MM';

export function isMM(item: unknown): item is MM {
    return reflection.isInstance(item, MM);
}

export interface DistanceCaptor extends Sensor {
    readonly $type: 'DistanceCaptor';
}

export const DistanceCaptor = 'DistanceCaptor';

export function isDistanceCaptor(item: unknown): item is DistanceCaptor {
    return reflection.isInstance(item, DistanceCaptor);
}

export interface If extends ControlStructure {
    readonly $type: 'If';
    else?: Block
    then: Block
}

export const If = 'If';

export function isIf(item: unknown): item is If {
    return reflection.isInstance(item, If);
}

export interface Repeat extends ControlStructure {
    readonly $type: 'Repeat';
    block: Block
}

export const Repeat = 'Repeat';

export function isRepeat(item: unknown): item is Repeat {
    return reflection.isInstance(item, Repeat);
}

export interface While extends ControlStructure {
    readonly $type: 'While';
    block: Block
}

export const While = 'While';

export function isWhile(item: unknown): item is While {
    return reflection.isInstance(item, While);
}

export interface Clock extends CustomAction {
    readonly $type: 'Clock';
    time: Expression
}

export const Clock = 'Clock';

export function isClock(item: unknown): item is Clock {
    return reflection.isInstance(item, Clock);
}

export interface Deplacement extends CustomAction {
    readonly $type: 'Deplacement';
    deplacement_value: Expression
    mouvement?: Mouvement
    unite: Unite
}

export const Deplacement = 'Deplacement';

export function isDeplacement(item: unknown): item is Deplacement {
    return reflection.isInstance(item, Deplacement);
}

export interface Speed extends CustomAction {
    readonly $type: 'Speed';
    unite: Unite
    value: Expression
}

export const Speed = 'Speed';

export function isSpeed(item: unknown): item is Speed {
    return reflection.isInstance(item, Speed);
}

export type RobAstType = {
    Addition: Addition
    And: And
    Assignation: Assignation
    BinaryExpression: BinaryExpression
    Block: Block
    CM: CM
    Clock: Clock
    ConstantBoolean: ConstantBoolean
    ConstantInt: ConstantInt
    ControlStructure: ControlStructure
    CustomAction: CustomAction
    Deplacement: Deplacement
    DistanceCaptor: DistanceCaptor
    Expression: Expression
    ExpressionType: ExpressionType
    Greater: Greater
    If: If
    Lower: Lower
    MM: MM
    Multiplication: Multiplication
    Or: Or
    ProcCall: ProcCall
    ProcDeclaration: ProcDeclaration
    Repeat: Repeat
    Robot: Robot
    Sensor: Sensor
    Soustraction: Soustraction
    Speed: Speed
    Statement: Statement
    Unite: Unite
    ValCall: ValCall
    VarDeclaration: VarDeclaration
    While: While
}

export class RobAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['Addition', 'And', 'Assignation', 'BinaryExpression', 'Block', 'CM', 'Clock', 'ConstantBoolean', 'ConstantInt', 'ControlStructure', 'CustomAction', 'Deplacement', 'DistanceCaptor', 'Expression', 'ExpressionType', 'Greater', 'If', 'Lower', 'MM', 'Multiplication', 'Or', 'ProcCall', 'ProcDeclaration', 'Repeat', 'Robot', 'Sensor', 'Soustraction', 'Speed', 'Statement', 'Unite', 'ValCall', 'VarDeclaration', 'While'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case Addition:
            case And:
            case Greater:
            case Lower:
            case Multiplication:
            case Or:
            case Soustraction: {
                return this.isSubtype(ExpressionType, supertype);
            }
            case Assignation:
            case Block:
            case ControlStructure:
            case CustomAction:
            case VarDeclaration: {
                return this.isSubtype(Statement, supertype);
            }
            case BinaryExpression:
            case ConstantBoolean:
            case ConstantInt:
            case ProcCall:
            case Sensor:
            case ValCall: {
                return this.isSubtype(Expression, supertype);
            }
            case Clock:
            case Deplacement:
            case Speed: {
                return this.isSubtype(CustomAction, supertype);
            }
            case CM:
            case MM: {
                return this.isSubtype(Unite, supertype);
            }
            case DistanceCaptor: {
                return this.isSubtype(Sensor, supertype);
            }
            case If:
            case Repeat:
            case While: {
                return this.isSubtype(ControlStructure, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'ProcCall:procdeclaration': {
                return ProcDeclaration;
            }
            case 'ValCall:vardeclaration': {
                return VarDeclaration;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'ConstantBoolean': {
                return {
                    name: 'ConstantBoolean',
                    mandatory: [
                        { name: 'value', type: 'boolean' }
                    ]
                };
            }
            case 'ProcCall': {
                return {
                    name: 'ProcCall',
                    mandatory: [
                        { name: 'arguments', type: 'array' }
                    ]
                };
            }
            case 'Block': {
                return {
                    name: 'Block',
                    mandatory: [
                        { name: 'statements', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new RobAstReflection();
