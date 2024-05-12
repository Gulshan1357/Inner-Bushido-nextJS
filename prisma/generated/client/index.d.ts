
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MatchHistroy
 * 
 */
export type MatchHistroy = $Result.DefaultSelection<Prisma.$MatchHistroyPayload>
/**
 * Model TechniqueProficiency
 * 
 */
export type TechniqueProficiency = $Result.DefaultSelection<Prisma.$TechniqueProficiencyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.matchHistroy`: Exposes CRUD operations for the **MatchHistroy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchHistroys
    * const matchHistroys = await prisma.matchHistroy.findMany()
    * ```
    */
  get matchHistroy(): Prisma.MatchHistroyDelegate<ExtArgs>;

  /**
   * `prisma.techniqueProficiency`: Exposes CRUD operations for the **TechniqueProficiency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechniqueProficiencies
    * const techniqueProficiencies = await prisma.techniqueProficiency.findMany()
    * ```
    */
  get techniqueProficiency(): Prisma.TechniqueProficiencyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MatchHistroy: 'MatchHistroy',
    TechniqueProficiency: 'TechniqueProficiency'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'matchHistroy' | 'techniqueProficiency'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MatchHistroy: {
        payload: Prisma.$MatchHistroyPayload<ExtArgs>
        fields: Prisma.MatchHistroyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchHistroyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchHistroyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>
          }
          findFirst: {
            args: Prisma.MatchHistroyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchHistroyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>
          }
          findMany: {
            args: Prisma.MatchHistroyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>[]
          }
          create: {
            args: Prisma.MatchHistroyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>
          }
          createMany: {
            args: Prisma.MatchHistroyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchHistroyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>
          }
          update: {
            args: Prisma.MatchHistroyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>
          }
          deleteMany: {
            args: Prisma.MatchHistroyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchHistroyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchHistroyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchHistroyPayload>
          }
          aggregate: {
            args: Prisma.MatchHistroyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatchHistroy>
          }
          groupBy: {
            args: Prisma.MatchHistroyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchHistroyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchHistroyCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchHistroyCountAggregateOutputType> | number
          }
        }
      }
      TechniqueProficiency: {
        payload: Prisma.$TechniqueProficiencyPayload<ExtArgs>
        fields: Prisma.TechniqueProficiencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechniqueProficiencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechniqueProficiencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>
          }
          findFirst: {
            args: Prisma.TechniqueProficiencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechniqueProficiencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>
          }
          findMany: {
            args: Prisma.TechniqueProficiencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>[]
          }
          create: {
            args: Prisma.TechniqueProficiencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>
          }
          createMany: {
            args: Prisma.TechniqueProficiencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TechniqueProficiencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>
          }
          update: {
            args: Prisma.TechniqueProficiencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>
          }
          deleteMany: {
            args: Prisma.TechniqueProficiencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TechniqueProficiencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TechniqueProficiencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechniqueProficiencyPayload>
          }
          aggregate: {
            args: Prisma.TechniqueProficiencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTechniqueProficiency>
          }
          groupBy: {
            args: Prisma.TechniqueProficiencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TechniqueProficiencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechniqueProficiencyCountArgs<ExtArgs>,
            result: $Utils.Optional<TechniqueProficiencyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    matches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchHistroyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkId: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkId: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    clerkId: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    clerkId: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
    email?: boolean
    matches?: boolean | User$matchesArgs<ExtArgs>
    techiques?: boolean | User$techiquesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
    email?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | User$matchesArgs<ExtArgs>
    techiques?: boolean | User$techiquesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      matches: Prisma.$MatchHistroyPayload<ExtArgs>[]
      techiques: Prisma.$TechniqueProficiencyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      clerkId: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'findMany'> | Null>;

    techiques<T extends User$techiquesArgs<ExtArgs> = {}>(args?: Subset<T, User$techiquesArgs<ExtArgs>>): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    where?: MatchHistroyWhereInput
    orderBy?: MatchHistroyOrderByWithRelationInput | MatchHistroyOrderByWithRelationInput[]
    cursor?: MatchHistroyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchHistroyScalarFieldEnum | MatchHistroyScalarFieldEnum[]
  }

  /**
   * User.techiques
   */
  export type User$techiquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    where?: TechniqueProficiencyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MatchHistroy
   */

  export type AggregateMatchHistroy = {
    _count: MatchHistroyCountAggregateOutputType | null
    _avg: MatchHistroyAvgAggregateOutputType | null
    _sum: MatchHistroySumAggregateOutputType | null
    _min: MatchHistroyMinAggregateOutputType | null
    _max: MatchHistroyMaxAggregateOutputType | null
  }

  export type MatchHistroyAvgAggregateOutputType = {
    score: number | null
  }

  export type MatchHistroySumAggregateOutputType = {
    score: number | null
  }

  export type MatchHistroyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    score: number | null
  }

  export type MatchHistroyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    score: number | null
  }

  export type MatchHistroyCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    score: number
    _all: number
  }


  export type MatchHistroyAvgAggregateInputType = {
    score?: true
  }

  export type MatchHistroySumAggregateInputType = {
    score?: true
  }

  export type MatchHistroyMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    score?: true
  }

  export type MatchHistroyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    score?: true
  }

  export type MatchHistroyCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    score?: true
    _all?: true
  }

  export type MatchHistroyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchHistroy to aggregate.
     */
    where?: MatchHistroyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistroys to fetch.
     */
    orderBy?: MatchHistroyOrderByWithRelationInput | MatchHistroyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchHistroyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistroys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistroys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchHistroys
    **/
    _count?: true | MatchHistroyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchHistroyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchHistroySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchHistroyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchHistroyMaxAggregateInputType
  }

  export type GetMatchHistroyAggregateType<T extends MatchHistroyAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchHistroy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchHistroy[P]>
      : GetScalarType<T[P], AggregateMatchHistroy[P]>
  }




  export type MatchHistroyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchHistroyWhereInput
    orderBy?: MatchHistroyOrderByWithAggregationInput | MatchHistroyOrderByWithAggregationInput[]
    by: MatchHistroyScalarFieldEnum[] | MatchHistroyScalarFieldEnum
    having?: MatchHistroyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchHistroyCountAggregateInputType | true
    _avg?: MatchHistroyAvgAggregateInputType
    _sum?: MatchHistroySumAggregateInputType
    _min?: MatchHistroyMinAggregateInputType
    _max?: MatchHistroyMaxAggregateInputType
  }

  export type MatchHistroyGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    score: number
    _count: MatchHistroyCountAggregateOutputType | null
    _avg: MatchHistroyAvgAggregateOutputType | null
    _sum: MatchHistroySumAggregateOutputType | null
    _min: MatchHistroyMinAggregateOutputType | null
    _max: MatchHistroyMaxAggregateOutputType | null
  }

  type GetMatchHistroyGroupByPayload<T extends MatchHistroyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchHistroyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchHistroyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchHistroyGroupByOutputType[P]>
            : GetScalarType<T[P], MatchHistroyGroupByOutputType[P]>
        }
      >
    >


  export type MatchHistroySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    score?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchHistroy"]>

  export type MatchHistroySelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    score?: boolean
  }


  export type MatchHistroyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MatchHistroyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchHistroy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      score: number
    }, ExtArgs["result"]["matchHistroy"]>
    composites: {}
  }


  type MatchHistroyGetPayload<S extends boolean | null | undefined | MatchHistroyDefaultArgs> = $Result.GetResult<Prisma.$MatchHistroyPayload, S>

  type MatchHistroyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchHistroyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchHistroyCountAggregateInputType | true
    }

  export interface MatchHistroyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchHistroy'], meta: { name: 'MatchHistroy' } }
    /**
     * Find zero or one MatchHistroy that matches the filter.
     * @param {MatchHistroyFindUniqueArgs} args - Arguments to find a MatchHistroy
     * @example
     * // Get one MatchHistroy
     * const matchHistroy = await prisma.matchHistroy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchHistroyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatchHistroyFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MatchHistroy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchHistroyFindUniqueOrThrowArgs} args - Arguments to find a MatchHistroy
     * @example
     * // Get one MatchHistroy
     * const matchHistroy = await prisma.matchHistroy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchHistroyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchHistroyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MatchHistroy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyFindFirstArgs} args - Arguments to find a MatchHistroy
     * @example
     * // Get one MatchHistroy
     * const matchHistroy = await prisma.matchHistroy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchHistroyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchHistroyFindFirstArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MatchHistroy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyFindFirstOrThrowArgs} args - Arguments to find a MatchHistroy
     * @example
     * // Get one MatchHistroy
     * const matchHistroy = await prisma.matchHistroy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchHistroyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchHistroyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MatchHistroys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchHistroys
     * const matchHistroys = await prisma.matchHistroy.findMany()
     * 
     * // Get first 10 MatchHistroys
     * const matchHistroys = await prisma.matchHistroy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchHistroyWithIdOnly = await prisma.matchHistroy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchHistroyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchHistroyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MatchHistroy.
     * @param {MatchHistroyCreateArgs} args - Arguments to create a MatchHistroy.
     * @example
     * // Create one MatchHistroy
     * const MatchHistroy = await prisma.matchHistroy.create({
     *   data: {
     *     // ... data to create a MatchHistroy
     *   }
     * })
     * 
    **/
    create<T extends MatchHistroyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchHistroyCreateArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MatchHistroys.
     *     @param {MatchHistroyCreateManyArgs} args - Arguments to create many MatchHistroys.
     *     @example
     *     // Create many MatchHistroys
     *     const matchHistroy = await prisma.matchHistroy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchHistroyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchHistroyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchHistroy.
     * @param {MatchHistroyDeleteArgs} args - Arguments to delete one MatchHistroy.
     * @example
     * // Delete one MatchHistroy
     * const MatchHistroy = await prisma.matchHistroy.delete({
     *   where: {
     *     // ... filter to delete one MatchHistroy
     *   }
     * })
     * 
    **/
    delete<T extends MatchHistroyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchHistroyDeleteArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MatchHistroy.
     * @param {MatchHistroyUpdateArgs} args - Arguments to update one MatchHistroy.
     * @example
     * // Update one MatchHistroy
     * const matchHistroy = await prisma.matchHistroy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchHistroyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchHistroyUpdateArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MatchHistroys.
     * @param {MatchHistroyDeleteManyArgs} args - Arguments to filter MatchHistroys to delete.
     * @example
     * // Delete a few MatchHistroys
     * const { count } = await prisma.matchHistroy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchHistroyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchHistroyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchHistroys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchHistroys
     * const matchHistroy = await prisma.matchHistroy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchHistroyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchHistroyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchHistroy.
     * @param {MatchHistroyUpsertArgs} args - Arguments to update or create a MatchHistroy.
     * @example
     * // Update or create a MatchHistroy
     * const matchHistroy = await prisma.matchHistroy.upsert({
     *   create: {
     *     // ... data to create a MatchHistroy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchHistroy we want to update
     *   }
     * })
    **/
    upsert<T extends MatchHistroyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchHistroyUpsertArgs<ExtArgs>>
    ): Prisma__MatchHistroyClient<$Result.GetResult<Prisma.$MatchHistroyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MatchHistroys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyCountArgs} args - Arguments to filter MatchHistroys to count.
     * @example
     * // Count the number of MatchHistroys
     * const count = await prisma.matchHistroy.count({
     *   where: {
     *     // ... the filter for the MatchHistroys we want to count
     *   }
     * })
    **/
    count<T extends MatchHistroyCountArgs>(
      args?: Subset<T, MatchHistroyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchHistroyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchHistroy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchHistroyAggregateArgs>(args: Subset<T, MatchHistroyAggregateArgs>): Prisma.PrismaPromise<GetMatchHistroyAggregateType<T>>

    /**
     * Group by MatchHistroy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistroyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchHistroyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchHistroyGroupByArgs['orderBy'] }
        : { orderBy?: MatchHistroyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchHistroyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchHistroyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchHistroy model
   */
  readonly fields: MatchHistroyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchHistroy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchHistroyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MatchHistroy model
   */ 
  interface MatchHistroyFieldRefs {
    readonly id: FieldRef<"MatchHistroy", 'String'>
    readonly createdAt: FieldRef<"MatchHistroy", 'DateTime'>
    readonly userId: FieldRef<"MatchHistroy", 'String'>
    readonly score: FieldRef<"MatchHistroy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MatchHistroy findUnique
   */
  export type MatchHistroyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistroy to fetch.
     */
    where: MatchHistroyWhereUniqueInput
  }

  /**
   * MatchHistroy findUniqueOrThrow
   */
  export type MatchHistroyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistroy to fetch.
     */
    where: MatchHistroyWhereUniqueInput
  }

  /**
   * MatchHistroy findFirst
   */
  export type MatchHistroyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistroy to fetch.
     */
    where?: MatchHistroyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistroys to fetch.
     */
    orderBy?: MatchHistroyOrderByWithRelationInput | MatchHistroyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchHistroys.
     */
    cursor?: MatchHistroyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistroys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistroys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchHistroys.
     */
    distinct?: MatchHistroyScalarFieldEnum | MatchHistroyScalarFieldEnum[]
  }

  /**
   * MatchHistroy findFirstOrThrow
   */
  export type MatchHistroyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistroy to fetch.
     */
    where?: MatchHistroyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistroys to fetch.
     */
    orderBy?: MatchHistroyOrderByWithRelationInput | MatchHistroyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchHistroys.
     */
    cursor?: MatchHistroyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistroys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistroys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchHistroys.
     */
    distinct?: MatchHistroyScalarFieldEnum | MatchHistroyScalarFieldEnum[]
  }

  /**
   * MatchHistroy findMany
   */
  export type MatchHistroyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * Filter, which MatchHistroys to fetch.
     */
    where?: MatchHistroyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchHistroys to fetch.
     */
    orderBy?: MatchHistroyOrderByWithRelationInput | MatchHistroyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchHistroys.
     */
    cursor?: MatchHistroyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchHistroys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchHistroys.
     */
    skip?: number
    distinct?: MatchHistroyScalarFieldEnum | MatchHistroyScalarFieldEnum[]
  }

  /**
   * MatchHistroy create
   */
  export type MatchHistroyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchHistroy.
     */
    data: XOR<MatchHistroyCreateInput, MatchHistroyUncheckedCreateInput>
  }

  /**
   * MatchHistroy createMany
   */
  export type MatchHistroyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchHistroys.
     */
    data: MatchHistroyCreateManyInput | MatchHistroyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchHistroy update
   */
  export type MatchHistroyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchHistroy.
     */
    data: XOR<MatchHistroyUpdateInput, MatchHistroyUncheckedUpdateInput>
    /**
     * Choose, which MatchHistroy to update.
     */
    where: MatchHistroyWhereUniqueInput
  }

  /**
   * MatchHistroy updateMany
   */
  export type MatchHistroyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchHistroys.
     */
    data: XOR<MatchHistroyUpdateManyMutationInput, MatchHistroyUncheckedUpdateManyInput>
    /**
     * Filter which MatchHistroys to update
     */
    where?: MatchHistroyWhereInput
  }

  /**
   * MatchHistroy upsert
   */
  export type MatchHistroyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchHistroy to update in case it exists.
     */
    where: MatchHistroyWhereUniqueInput
    /**
     * In case the MatchHistroy found by the `where` argument doesn't exist, create a new MatchHistroy with this data.
     */
    create: XOR<MatchHistroyCreateInput, MatchHistroyUncheckedCreateInput>
    /**
     * In case the MatchHistroy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchHistroyUpdateInput, MatchHistroyUncheckedUpdateInput>
  }

  /**
   * MatchHistroy delete
   */
  export type MatchHistroyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
    /**
     * Filter which MatchHistroy to delete.
     */
    where: MatchHistroyWhereUniqueInput
  }

  /**
   * MatchHistroy deleteMany
   */
  export type MatchHistroyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchHistroys to delete
     */
    where?: MatchHistroyWhereInput
  }

  /**
   * MatchHistroy without action
   */
  export type MatchHistroyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistroy
     */
    select?: MatchHistroySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchHistroyInclude<ExtArgs> | null
  }


  /**
   * Model TechniqueProficiency
   */

  export type AggregateTechniqueProficiency = {
    _count: TechniqueProficiencyCountAggregateOutputType | null
    _min: TechniqueProficiencyMinAggregateOutputType | null
    _max: TechniqueProficiencyMaxAggregateOutputType | null
  }

  export type TechniqueProficiencyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    firstCutting: boolean | null
    secondCutting: boolean | null
    thirdCutting: boolean | null
    fourthCutting: boolean | null
    fifthCutting: boolean | null
    sixthCutting: boolean | null
    seventhCutting: boolean | null
    firstBlockTechnique: boolean | null
    secondBlockTechnique: boolean | null
    thirdBlockTechnique: boolean | null
    firstSwordStance: boolean | null
    secondSwordStance: boolean | null
    thirdSwordStance: boolean | null
    fourthSwordStance: boolean | null
    fifthSwordStance: boolean | null
    sixthSwordStance: boolean | null
    seventhSwordStance: boolean | null
    eigthSwordStance: boolean | null
  }

  export type TechniqueProficiencyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    firstCutting: boolean | null
    secondCutting: boolean | null
    thirdCutting: boolean | null
    fourthCutting: boolean | null
    fifthCutting: boolean | null
    sixthCutting: boolean | null
    seventhCutting: boolean | null
    firstBlockTechnique: boolean | null
    secondBlockTechnique: boolean | null
    thirdBlockTechnique: boolean | null
    firstSwordStance: boolean | null
    secondSwordStance: boolean | null
    thirdSwordStance: boolean | null
    fourthSwordStance: boolean | null
    fifthSwordStance: boolean | null
    sixthSwordStance: boolean | null
    seventhSwordStance: boolean | null
    eigthSwordStance: boolean | null
  }

  export type TechniqueProficiencyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    firstCutting: number
    secondCutting: number
    thirdCutting: number
    fourthCutting: number
    fifthCutting: number
    sixthCutting: number
    seventhCutting: number
    firstBlockTechnique: number
    secondBlockTechnique: number
    thirdBlockTechnique: number
    firstSwordStance: number
    secondSwordStance: number
    thirdSwordStance: number
    fourthSwordStance: number
    fifthSwordStance: number
    sixthSwordStance: number
    seventhSwordStance: number
    eigthSwordStance: number
    _all: number
  }


  export type TechniqueProficiencyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    firstCutting?: true
    secondCutting?: true
    thirdCutting?: true
    fourthCutting?: true
    fifthCutting?: true
    sixthCutting?: true
    seventhCutting?: true
    firstBlockTechnique?: true
    secondBlockTechnique?: true
    thirdBlockTechnique?: true
    firstSwordStance?: true
    secondSwordStance?: true
    thirdSwordStance?: true
    fourthSwordStance?: true
    fifthSwordStance?: true
    sixthSwordStance?: true
    seventhSwordStance?: true
    eigthSwordStance?: true
  }

  export type TechniqueProficiencyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    firstCutting?: true
    secondCutting?: true
    thirdCutting?: true
    fourthCutting?: true
    fifthCutting?: true
    sixthCutting?: true
    seventhCutting?: true
    firstBlockTechnique?: true
    secondBlockTechnique?: true
    thirdBlockTechnique?: true
    firstSwordStance?: true
    secondSwordStance?: true
    thirdSwordStance?: true
    fourthSwordStance?: true
    fifthSwordStance?: true
    sixthSwordStance?: true
    seventhSwordStance?: true
    eigthSwordStance?: true
  }

  export type TechniqueProficiencyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    firstCutting?: true
    secondCutting?: true
    thirdCutting?: true
    fourthCutting?: true
    fifthCutting?: true
    sixthCutting?: true
    seventhCutting?: true
    firstBlockTechnique?: true
    secondBlockTechnique?: true
    thirdBlockTechnique?: true
    firstSwordStance?: true
    secondSwordStance?: true
    thirdSwordStance?: true
    fourthSwordStance?: true
    fifthSwordStance?: true
    sixthSwordStance?: true
    seventhSwordStance?: true
    eigthSwordStance?: true
    _all?: true
  }

  export type TechniqueProficiencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechniqueProficiency to aggregate.
     */
    where?: TechniqueProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechniqueProficiencies to fetch.
     */
    orderBy?: TechniqueProficiencyOrderByWithRelationInput | TechniqueProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechniqueProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechniqueProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechniqueProficiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechniqueProficiencies
    **/
    _count?: true | TechniqueProficiencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechniqueProficiencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechniqueProficiencyMaxAggregateInputType
  }

  export type GetTechniqueProficiencyAggregateType<T extends TechniqueProficiencyAggregateArgs> = {
        [P in keyof T & keyof AggregateTechniqueProficiency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechniqueProficiency[P]>
      : GetScalarType<T[P], AggregateTechniqueProficiency[P]>
  }




  export type TechniqueProficiencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechniqueProficiencyWhereInput
    orderBy?: TechniqueProficiencyOrderByWithAggregationInput | TechniqueProficiencyOrderByWithAggregationInput[]
    by: TechniqueProficiencyScalarFieldEnum[] | TechniqueProficiencyScalarFieldEnum
    having?: TechniqueProficiencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechniqueProficiencyCountAggregateInputType | true
    _min?: TechniqueProficiencyMinAggregateInputType
    _max?: TechniqueProficiencyMaxAggregateInputType
  }

  export type TechniqueProficiencyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    firstCutting: boolean
    secondCutting: boolean
    thirdCutting: boolean
    fourthCutting: boolean
    fifthCutting: boolean
    sixthCutting: boolean
    seventhCutting: boolean
    firstBlockTechnique: boolean
    secondBlockTechnique: boolean
    thirdBlockTechnique: boolean
    firstSwordStance: boolean
    secondSwordStance: boolean
    thirdSwordStance: boolean
    fourthSwordStance: boolean
    fifthSwordStance: boolean
    sixthSwordStance: boolean
    seventhSwordStance: boolean
    eigthSwordStance: boolean
    _count: TechniqueProficiencyCountAggregateOutputType | null
    _min: TechniqueProficiencyMinAggregateOutputType | null
    _max: TechniqueProficiencyMaxAggregateOutputType | null
  }

  type GetTechniqueProficiencyGroupByPayload<T extends TechniqueProficiencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechniqueProficiencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechniqueProficiencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechniqueProficiencyGroupByOutputType[P]>
            : GetScalarType<T[P], TechniqueProficiencyGroupByOutputType[P]>
        }
      >
    >


  export type TechniqueProficiencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["techniqueProficiency"]>

  export type TechniqueProficiencySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
  }


  export type TechniqueProficiencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TechniqueProficiencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechniqueProficiency"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      firstCutting: boolean
      secondCutting: boolean
      thirdCutting: boolean
      fourthCutting: boolean
      fifthCutting: boolean
      sixthCutting: boolean
      seventhCutting: boolean
      firstBlockTechnique: boolean
      secondBlockTechnique: boolean
      thirdBlockTechnique: boolean
      firstSwordStance: boolean
      secondSwordStance: boolean
      thirdSwordStance: boolean
      fourthSwordStance: boolean
      fifthSwordStance: boolean
      sixthSwordStance: boolean
      seventhSwordStance: boolean
      eigthSwordStance: boolean
    }, ExtArgs["result"]["techniqueProficiency"]>
    composites: {}
  }


  type TechniqueProficiencyGetPayload<S extends boolean | null | undefined | TechniqueProficiencyDefaultArgs> = $Result.GetResult<Prisma.$TechniqueProficiencyPayload, S>

  type TechniqueProficiencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TechniqueProficiencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TechniqueProficiencyCountAggregateInputType | true
    }

  export interface TechniqueProficiencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechniqueProficiency'], meta: { name: 'TechniqueProficiency' } }
    /**
     * Find zero or one TechniqueProficiency that matches the filter.
     * @param {TechniqueProficiencyFindUniqueArgs} args - Arguments to find a TechniqueProficiency
     * @example
     * // Get one TechniqueProficiency
     * const techniqueProficiency = await prisma.techniqueProficiency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TechniqueProficiencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TechniqueProficiencyFindUniqueArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TechniqueProficiency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TechniqueProficiencyFindUniqueOrThrowArgs} args - Arguments to find a TechniqueProficiency
     * @example
     * // Get one TechniqueProficiency
     * const techniqueProficiency = await prisma.techniqueProficiency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TechniqueProficiencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TechniqueProficiencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TechniqueProficiency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyFindFirstArgs} args - Arguments to find a TechniqueProficiency
     * @example
     * // Get one TechniqueProficiency
     * const techniqueProficiency = await prisma.techniqueProficiency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TechniqueProficiencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TechniqueProficiencyFindFirstArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TechniqueProficiency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyFindFirstOrThrowArgs} args - Arguments to find a TechniqueProficiency
     * @example
     * // Get one TechniqueProficiency
     * const techniqueProficiency = await prisma.techniqueProficiency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TechniqueProficiencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TechniqueProficiencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TechniqueProficiencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechniqueProficiencies
     * const techniqueProficiencies = await prisma.techniqueProficiency.findMany()
     * 
     * // Get first 10 TechniqueProficiencies
     * const techniqueProficiencies = await prisma.techniqueProficiency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techniqueProficiencyWithIdOnly = await prisma.techniqueProficiency.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TechniqueProficiencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechniqueProficiencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TechniqueProficiency.
     * @param {TechniqueProficiencyCreateArgs} args - Arguments to create a TechniqueProficiency.
     * @example
     * // Create one TechniqueProficiency
     * const TechniqueProficiency = await prisma.techniqueProficiency.create({
     *   data: {
     *     // ... data to create a TechniqueProficiency
     *   }
     * })
     * 
    **/
    create<T extends TechniqueProficiencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TechniqueProficiencyCreateArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TechniqueProficiencies.
     *     @param {TechniqueProficiencyCreateManyArgs} args - Arguments to create many TechniqueProficiencies.
     *     @example
     *     // Create many TechniqueProficiencies
     *     const techniqueProficiency = await prisma.techniqueProficiency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TechniqueProficiencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechniqueProficiencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TechniqueProficiency.
     * @param {TechniqueProficiencyDeleteArgs} args - Arguments to delete one TechniqueProficiency.
     * @example
     * // Delete one TechniqueProficiency
     * const TechniqueProficiency = await prisma.techniqueProficiency.delete({
     *   where: {
     *     // ... filter to delete one TechniqueProficiency
     *   }
     * })
     * 
    **/
    delete<T extends TechniqueProficiencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TechniqueProficiencyDeleteArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TechniqueProficiency.
     * @param {TechniqueProficiencyUpdateArgs} args - Arguments to update one TechniqueProficiency.
     * @example
     * // Update one TechniqueProficiency
     * const techniqueProficiency = await prisma.techniqueProficiency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TechniqueProficiencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TechniqueProficiencyUpdateArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TechniqueProficiencies.
     * @param {TechniqueProficiencyDeleteManyArgs} args - Arguments to filter TechniqueProficiencies to delete.
     * @example
     * // Delete a few TechniqueProficiencies
     * const { count } = await prisma.techniqueProficiency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TechniqueProficiencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechniqueProficiencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechniqueProficiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechniqueProficiencies
     * const techniqueProficiency = await prisma.techniqueProficiency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TechniqueProficiencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TechniqueProficiencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TechniqueProficiency.
     * @param {TechniqueProficiencyUpsertArgs} args - Arguments to update or create a TechniqueProficiency.
     * @example
     * // Update or create a TechniqueProficiency
     * const techniqueProficiency = await prisma.techniqueProficiency.upsert({
     *   create: {
     *     // ... data to create a TechniqueProficiency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechniqueProficiency we want to update
     *   }
     * })
    **/
    upsert<T extends TechniqueProficiencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TechniqueProficiencyUpsertArgs<ExtArgs>>
    ): Prisma__TechniqueProficiencyClient<$Result.GetResult<Prisma.$TechniqueProficiencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TechniqueProficiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyCountArgs} args - Arguments to filter TechniqueProficiencies to count.
     * @example
     * // Count the number of TechniqueProficiencies
     * const count = await prisma.techniqueProficiency.count({
     *   where: {
     *     // ... the filter for the TechniqueProficiencies we want to count
     *   }
     * })
    **/
    count<T extends TechniqueProficiencyCountArgs>(
      args?: Subset<T, TechniqueProficiencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechniqueProficiencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechniqueProficiency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechniqueProficiencyAggregateArgs>(args: Subset<T, TechniqueProficiencyAggregateArgs>): Prisma.PrismaPromise<GetTechniqueProficiencyAggregateType<T>>

    /**
     * Group by TechniqueProficiency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechniqueProficiencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechniqueProficiencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechniqueProficiencyGroupByArgs['orderBy'] }
        : { orderBy?: TechniqueProficiencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechniqueProficiencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechniqueProficiencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechniqueProficiency model
   */
  readonly fields: TechniqueProficiencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechniqueProficiency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechniqueProficiencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TechniqueProficiency model
   */ 
  interface TechniqueProficiencyFieldRefs {
    readonly id: FieldRef<"TechniqueProficiency", 'String'>
    readonly createdAt: FieldRef<"TechniqueProficiency", 'DateTime'>
    readonly updatedAt: FieldRef<"TechniqueProficiency", 'DateTime'>
    readonly userId: FieldRef<"TechniqueProficiency", 'String'>
    readonly firstCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly secondCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly thirdCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly fourthCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly fifthCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly sixthCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly seventhCutting: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly firstBlockTechnique: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly secondBlockTechnique: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly thirdBlockTechnique: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly firstSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly secondSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly thirdSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly fourthSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly fifthSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly sixthSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly seventhSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
    readonly eigthSwordStance: FieldRef<"TechniqueProficiency", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TechniqueProficiency findUnique
   */
  export type TechniqueProficiencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which TechniqueProficiency to fetch.
     */
    where: TechniqueProficiencyWhereUniqueInput
  }

  /**
   * TechniqueProficiency findUniqueOrThrow
   */
  export type TechniqueProficiencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which TechniqueProficiency to fetch.
     */
    where: TechniqueProficiencyWhereUniqueInput
  }

  /**
   * TechniqueProficiency findFirst
   */
  export type TechniqueProficiencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which TechniqueProficiency to fetch.
     */
    where?: TechniqueProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechniqueProficiencies to fetch.
     */
    orderBy?: TechniqueProficiencyOrderByWithRelationInput | TechniqueProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechniqueProficiencies.
     */
    cursor?: TechniqueProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechniqueProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechniqueProficiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechniqueProficiencies.
     */
    distinct?: TechniqueProficiencyScalarFieldEnum | TechniqueProficiencyScalarFieldEnum[]
  }

  /**
   * TechniqueProficiency findFirstOrThrow
   */
  export type TechniqueProficiencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which TechniqueProficiency to fetch.
     */
    where?: TechniqueProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechniqueProficiencies to fetch.
     */
    orderBy?: TechniqueProficiencyOrderByWithRelationInput | TechniqueProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechniqueProficiencies.
     */
    cursor?: TechniqueProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechniqueProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechniqueProficiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechniqueProficiencies.
     */
    distinct?: TechniqueProficiencyScalarFieldEnum | TechniqueProficiencyScalarFieldEnum[]
  }

  /**
   * TechniqueProficiency findMany
   */
  export type TechniqueProficiencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which TechniqueProficiencies to fetch.
     */
    where?: TechniqueProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechniqueProficiencies to fetch.
     */
    orderBy?: TechniqueProficiencyOrderByWithRelationInput | TechniqueProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechniqueProficiencies.
     */
    cursor?: TechniqueProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechniqueProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechniqueProficiencies.
     */
    skip?: number
    distinct?: TechniqueProficiencyScalarFieldEnum | TechniqueProficiencyScalarFieldEnum[]
  }

  /**
   * TechniqueProficiency create
   */
  export type TechniqueProficiencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * The data needed to create a TechniqueProficiency.
     */
    data: XOR<TechniqueProficiencyCreateInput, TechniqueProficiencyUncheckedCreateInput>
  }

  /**
   * TechniqueProficiency createMany
   */
  export type TechniqueProficiencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechniqueProficiencies.
     */
    data: TechniqueProficiencyCreateManyInput | TechniqueProficiencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechniqueProficiency update
   */
  export type TechniqueProficiencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * The data needed to update a TechniqueProficiency.
     */
    data: XOR<TechniqueProficiencyUpdateInput, TechniqueProficiencyUncheckedUpdateInput>
    /**
     * Choose, which TechniqueProficiency to update.
     */
    where: TechniqueProficiencyWhereUniqueInput
  }

  /**
   * TechniqueProficiency updateMany
   */
  export type TechniqueProficiencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechniqueProficiencies.
     */
    data: XOR<TechniqueProficiencyUpdateManyMutationInput, TechniqueProficiencyUncheckedUpdateManyInput>
    /**
     * Filter which TechniqueProficiencies to update
     */
    where?: TechniqueProficiencyWhereInput
  }

  /**
   * TechniqueProficiency upsert
   */
  export type TechniqueProficiencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * The filter to search for the TechniqueProficiency to update in case it exists.
     */
    where: TechniqueProficiencyWhereUniqueInput
    /**
     * In case the TechniqueProficiency found by the `where` argument doesn't exist, create a new TechniqueProficiency with this data.
     */
    create: XOR<TechniqueProficiencyCreateInput, TechniqueProficiencyUncheckedCreateInput>
    /**
     * In case the TechniqueProficiency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechniqueProficiencyUpdateInput, TechniqueProficiencyUncheckedUpdateInput>
  }

  /**
   * TechniqueProficiency delete
   */
  export type TechniqueProficiencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
    /**
     * Filter which TechniqueProficiency to delete.
     */
    where: TechniqueProficiencyWhereUniqueInput
  }

  /**
   * TechniqueProficiency deleteMany
   */
  export type TechniqueProficiencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechniqueProficiencies to delete
     */
    where?: TechniqueProficiencyWhereInput
  }

  /**
   * TechniqueProficiency without action
   */
  export type TechniqueProficiencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechniqueProficiency
     */
    select?: TechniqueProficiencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechniqueProficiencyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clerkId: 'clerkId',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MatchHistroyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    score: 'score'
  };

  export type MatchHistroyScalarFieldEnum = (typeof MatchHistroyScalarFieldEnum)[keyof typeof MatchHistroyScalarFieldEnum]


  export const TechniqueProficiencyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    firstCutting: 'firstCutting',
    secondCutting: 'secondCutting',
    thirdCutting: 'thirdCutting',
    fourthCutting: 'fourthCutting',
    fifthCutting: 'fifthCutting',
    sixthCutting: 'sixthCutting',
    seventhCutting: 'seventhCutting',
    firstBlockTechnique: 'firstBlockTechnique',
    secondBlockTechnique: 'secondBlockTechnique',
    thirdBlockTechnique: 'thirdBlockTechnique',
    firstSwordStance: 'firstSwordStance',
    secondSwordStance: 'secondSwordStance',
    thirdSwordStance: 'thirdSwordStance',
    fourthSwordStance: 'fourthSwordStance',
    fifthSwordStance: 'fifthSwordStance',
    sixthSwordStance: 'sixthSwordStance',
    seventhSwordStance: 'seventhSwordStance',
    eigthSwordStance: 'eigthSwordStance'
  };

  export type TechniqueProficiencyScalarFieldEnum = (typeof TechniqueProficiencyScalarFieldEnum)[keyof typeof TechniqueProficiencyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    matches?: MatchHistroyListRelationFilter
    techiques?: XOR<TechniqueProficiencyNullableRelationFilter, TechniqueProficiencyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    matches?: MatchHistroyOrderByRelationAggregateInput
    techiques?: TechniqueProficiencyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matches?: MatchHistroyListRelationFilter
    techiques?: XOR<TechniqueProficiencyNullableRelationFilter, TechniqueProficiencyWhereInput> | null
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type MatchHistroyWhereInput = {
    AND?: MatchHistroyWhereInput | MatchHistroyWhereInput[]
    OR?: MatchHistroyWhereInput[]
    NOT?: MatchHistroyWhereInput | MatchHistroyWhereInput[]
    id?: StringFilter<"MatchHistroy"> | string
    createdAt?: DateTimeFilter<"MatchHistroy"> | Date | string
    userId?: StringFilter<"MatchHistroy"> | string
    score?: IntFilter<"MatchHistroy"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MatchHistroyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MatchHistroyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchHistroyWhereInput | MatchHistroyWhereInput[]
    OR?: MatchHistroyWhereInput[]
    NOT?: MatchHistroyWhereInput | MatchHistroyWhereInput[]
    createdAt?: DateTimeFilter<"MatchHistroy"> | Date | string
    userId?: StringFilter<"MatchHistroy"> | string
    score?: IntFilter<"MatchHistroy"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MatchHistroyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    _count?: MatchHistroyCountOrderByAggregateInput
    _avg?: MatchHistroyAvgOrderByAggregateInput
    _max?: MatchHistroyMaxOrderByAggregateInput
    _min?: MatchHistroyMinOrderByAggregateInput
    _sum?: MatchHistroySumOrderByAggregateInput
  }

  export type MatchHistroyScalarWhereWithAggregatesInput = {
    AND?: MatchHistroyScalarWhereWithAggregatesInput | MatchHistroyScalarWhereWithAggregatesInput[]
    OR?: MatchHistroyScalarWhereWithAggregatesInput[]
    NOT?: MatchHistroyScalarWhereWithAggregatesInput | MatchHistroyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchHistroy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchHistroy"> | Date | string
    userId?: StringWithAggregatesFilter<"MatchHistroy"> | string
    score?: IntWithAggregatesFilter<"MatchHistroy"> | number
  }

  export type TechniqueProficiencyWhereInput = {
    AND?: TechniqueProficiencyWhereInput | TechniqueProficiencyWhereInput[]
    OR?: TechniqueProficiencyWhereInput[]
    NOT?: TechniqueProficiencyWhereInput | TechniqueProficiencyWhereInput[]
    id?: StringFilter<"TechniqueProficiency"> | string
    createdAt?: DateTimeFilter<"TechniqueProficiency"> | Date | string
    updatedAt?: DateTimeFilter<"TechniqueProficiency"> | Date | string
    userId?: StringFilter<"TechniqueProficiency"> | string
    firstCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    secondCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    thirdCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    fourthCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    fifthCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    sixthCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    seventhCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    firstBlockTechnique?: BoolFilter<"TechniqueProficiency"> | boolean
    secondBlockTechnique?: BoolFilter<"TechniqueProficiency"> | boolean
    thirdBlockTechnique?: BoolFilter<"TechniqueProficiency"> | boolean
    firstSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    secondSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    thirdSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    fourthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    fifthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    sixthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    seventhSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    eigthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TechniqueProficiencyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    firstCutting?: SortOrder
    secondCutting?: SortOrder
    thirdCutting?: SortOrder
    fourthCutting?: SortOrder
    fifthCutting?: SortOrder
    sixthCutting?: SortOrder
    seventhCutting?: SortOrder
    firstBlockTechnique?: SortOrder
    secondBlockTechnique?: SortOrder
    thirdBlockTechnique?: SortOrder
    firstSwordStance?: SortOrder
    secondSwordStance?: SortOrder
    thirdSwordStance?: SortOrder
    fourthSwordStance?: SortOrder
    fifthSwordStance?: SortOrder
    sixthSwordStance?: SortOrder
    seventhSwordStance?: SortOrder
    eigthSwordStance?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TechniqueProficiencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TechniqueProficiencyWhereInput | TechniqueProficiencyWhereInput[]
    OR?: TechniqueProficiencyWhereInput[]
    NOT?: TechniqueProficiencyWhereInput | TechniqueProficiencyWhereInput[]
    createdAt?: DateTimeFilter<"TechniqueProficiency"> | Date | string
    updatedAt?: DateTimeFilter<"TechniqueProficiency"> | Date | string
    firstCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    secondCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    thirdCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    fourthCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    fifthCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    sixthCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    seventhCutting?: BoolFilter<"TechniqueProficiency"> | boolean
    firstBlockTechnique?: BoolFilter<"TechniqueProficiency"> | boolean
    secondBlockTechnique?: BoolFilter<"TechniqueProficiency"> | boolean
    thirdBlockTechnique?: BoolFilter<"TechniqueProficiency"> | boolean
    firstSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    secondSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    thirdSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    fourthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    fifthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    sixthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    seventhSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    eigthSwordStance?: BoolFilter<"TechniqueProficiency"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TechniqueProficiencyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    firstCutting?: SortOrder
    secondCutting?: SortOrder
    thirdCutting?: SortOrder
    fourthCutting?: SortOrder
    fifthCutting?: SortOrder
    sixthCutting?: SortOrder
    seventhCutting?: SortOrder
    firstBlockTechnique?: SortOrder
    secondBlockTechnique?: SortOrder
    thirdBlockTechnique?: SortOrder
    firstSwordStance?: SortOrder
    secondSwordStance?: SortOrder
    thirdSwordStance?: SortOrder
    fourthSwordStance?: SortOrder
    fifthSwordStance?: SortOrder
    sixthSwordStance?: SortOrder
    seventhSwordStance?: SortOrder
    eigthSwordStance?: SortOrder
    _count?: TechniqueProficiencyCountOrderByAggregateInput
    _max?: TechniqueProficiencyMaxOrderByAggregateInput
    _min?: TechniqueProficiencyMinOrderByAggregateInput
  }

  export type TechniqueProficiencyScalarWhereWithAggregatesInput = {
    AND?: TechniqueProficiencyScalarWhereWithAggregatesInput | TechniqueProficiencyScalarWhereWithAggregatesInput[]
    OR?: TechniqueProficiencyScalarWhereWithAggregatesInput[]
    NOT?: TechniqueProficiencyScalarWhereWithAggregatesInput | TechniqueProficiencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TechniqueProficiency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TechniqueProficiency"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TechniqueProficiency"> | Date | string
    userId?: StringWithAggregatesFilter<"TechniqueProficiency"> | string
    firstCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    secondCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    thirdCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    fourthCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    fifthCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    sixthCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    seventhCutting?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    firstBlockTechnique?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    secondBlockTechnique?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    thirdBlockTechnique?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    firstSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    secondSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    thirdSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    fourthSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    fifthSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    sixthSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    seventhSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
    eigthSwordStance?: BoolWithAggregatesFilter<"TechniqueProficiency"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    matches?: MatchHistroyCreateNestedManyWithoutUserInput
    techiques?: TechniqueProficiencyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    matches?: MatchHistroyUncheckedCreateNestedManyWithoutUserInput
    techiques?: TechniqueProficiencyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matches?: MatchHistroyUpdateManyWithoutUserNestedInput
    techiques?: TechniqueProficiencyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matches?: MatchHistroyUncheckedUpdateManyWithoutUserNestedInput
    techiques?: TechniqueProficiencyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MatchHistroyCreateInput = {
    id?: string
    createdAt?: Date | string
    score?: number
    user: UserCreateNestedOneWithoutMatchesInput
  }

  export type MatchHistroyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    score?: number
  }

  export type MatchHistroyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchHistroyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type MatchHistroyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    score?: number
  }

  export type MatchHistroyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type MatchHistroyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type TechniqueProficiencyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
    user: UserCreateNestedOneWithoutTechiquesInput
  }

  export type TechniqueProficiencyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
  }

  export type TechniqueProficiencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstCutting?: BoolFieldUpdateOperationsInput | boolean
    secondCutting?: BoolFieldUpdateOperationsInput | boolean
    thirdCutting?: BoolFieldUpdateOperationsInput | boolean
    fourthCutting?: BoolFieldUpdateOperationsInput | boolean
    fifthCutting?: BoolFieldUpdateOperationsInput | boolean
    sixthCutting?: BoolFieldUpdateOperationsInput | boolean
    seventhCutting?: BoolFieldUpdateOperationsInput | boolean
    firstBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    secondBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    thirdBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    firstSwordStance?: BoolFieldUpdateOperationsInput | boolean
    secondSwordStance?: BoolFieldUpdateOperationsInput | boolean
    thirdSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fourthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fifthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    sixthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    seventhSwordStance?: BoolFieldUpdateOperationsInput | boolean
    eigthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTechiquesNestedInput
  }

  export type TechniqueProficiencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    firstCutting?: BoolFieldUpdateOperationsInput | boolean
    secondCutting?: BoolFieldUpdateOperationsInput | boolean
    thirdCutting?: BoolFieldUpdateOperationsInput | boolean
    fourthCutting?: BoolFieldUpdateOperationsInput | boolean
    fifthCutting?: BoolFieldUpdateOperationsInput | boolean
    sixthCutting?: BoolFieldUpdateOperationsInput | boolean
    seventhCutting?: BoolFieldUpdateOperationsInput | boolean
    firstBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    secondBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    thirdBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    firstSwordStance?: BoolFieldUpdateOperationsInput | boolean
    secondSwordStance?: BoolFieldUpdateOperationsInput | boolean
    thirdSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fourthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fifthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    sixthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    seventhSwordStance?: BoolFieldUpdateOperationsInput | boolean
    eigthSwordStance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TechniqueProficiencyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
  }

  export type TechniqueProficiencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstCutting?: BoolFieldUpdateOperationsInput | boolean
    secondCutting?: BoolFieldUpdateOperationsInput | boolean
    thirdCutting?: BoolFieldUpdateOperationsInput | boolean
    fourthCutting?: BoolFieldUpdateOperationsInput | boolean
    fifthCutting?: BoolFieldUpdateOperationsInput | boolean
    sixthCutting?: BoolFieldUpdateOperationsInput | boolean
    seventhCutting?: BoolFieldUpdateOperationsInput | boolean
    firstBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    secondBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    thirdBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    firstSwordStance?: BoolFieldUpdateOperationsInput | boolean
    secondSwordStance?: BoolFieldUpdateOperationsInput | boolean
    thirdSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fourthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fifthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    sixthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    seventhSwordStance?: BoolFieldUpdateOperationsInput | boolean
    eigthSwordStance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TechniqueProficiencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    firstCutting?: BoolFieldUpdateOperationsInput | boolean
    secondCutting?: BoolFieldUpdateOperationsInput | boolean
    thirdCutting?: BoolFieldUpdateOperationsInput | boolean
    fourthCutting?: BoolFieldUpdateOperationsInput | boolean
    fifthCutting?: BoolFieldUpdateOperationsInput | boolean
    sixthCutting?: BoolFieldUpdateOperationsInput | boolean
    seventhCutting?: BoolFieldUpdateOperationsInput | boolean
    firstBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    secondBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    thirdBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    firstSwordStance?: BoolFieldUpdateOperationsInput | boolean
    secondSwordStance?: BoolFieldUpdateOperationsInput | boolean
    thirdSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fourthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fifthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    sixthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    seventhSwordStance?: BoolFieldUpdateOperationsInput | boolean
    eigthSwordStance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MatchHistroyListRelationFilter = {
    every?: MatchHistroyWhereInput
    some?: MatchHistroyWhereInput
    none?: MatchHistroyWhereInput
  }

  export type TechniqueProficiencyNullableRelationFilter = {
    is?: TechniqueProficiencyWhereInput | null
    isNot?: TechniqueProficiencyWhereInput | null
  }

  export type MatchHistroyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchHistroyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    score?: SortOrder
  }

  export type MatchHistroyAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type MatchHistroyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    score?: SortOrder
  }

  export type MatchHistroyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    score?: SortOrder
  }

  export type MatchHistroySumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TechniqueProficiencyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    firstCutting?: SortOrder
    secondCutting?: SortOrder
    thirdCutting?: SortOrder
    fourthCutting?: SortOrder
    fifthCutting?: SortOrder
    sixthCutting?: SortOrder
    seventhCutting?: SortOrder
    firstBlockTechnique?: SortOrder
    secondBlockTechnique?: SortOrder
    thirdBlockTechnique?: SortOrder
    firstSwordStance?: SortOrder
    secondSwordStance?: SortOrder
    thirdSwordStance?: SortOrder
    fourthSwordStance?: SortOrder
    fifthSwordStance?: SortOrder
    sixthSwordStance?: SortOrder
    seventhSwordStance?: SortOrder
    eigthSwordStance?: SortOrder
  }

  export type TechniqueProficiencyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    firstCutting?: SortOrder
    secondCutting?: SortOrder
    thirdCutting?: SortOrder
    fourthCutting?: SortOrder
    fifthCutting?: SortOrder
    sixthCutting?: SortOrder
    seventhCutting?: SortOrder
    firstBlockTechnique?: SortOrder
    secondBlockTechnique?: SortOrder
    thirdBlockTechnique?: SortOrder
    firstSwordStance?: SortOrder
    secondSwordStance?: SortOrder
    thirdSwordStance?: SortOrder
    fourthSwordStance?: SortOrder
    fifthSwordStance?: SortOrder
    sixthSwordStance?: SortOrder
    seventhSwordStance?: SortOrder
    eigthSwordStance?: SortOrder
  }

  export type TechniqueProficiencyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    firstCutting?: SortOrder
    secondCutting?: SortOrder
    thirdCutting?: SortOrder
    fourthCutting?: SortOrder
    fifthCutting?: SortOrder
    sixthCutting?: SortOrder
    seventhCutting?: SortOrder
    firstBlockTechnique?: SortOrder
    secondBlockTechnique?: SortOrder
    thirdBlockTechnique?: SortOrder
    firstSwordStance?: SortOrder
    secondSwordStance?: SortOrder
    thirdSwordStance?: SortOrder
    fourthSwordStance?: SortOrder
    fifthSwordStance?: SortOrder
    sixthSwordStance?: SortOrder
    seventhSwordStance?: SortOrder
    eigthSwordStance?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MatchHistroyCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchHistroyCreateWithoutUserInput, MatchHistroyUncheckedCreateWithoutUserInput> | MatchHistroyCreateWithoutUserInput[] | MatchHistroyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchHistroyCreateOrConnectWithoutUserInput | MatchHistroyCreateOrConnectWithoutUserInput[]
    createMany?: MatchHistroyCreateManyUserInputEnvelope
    connect?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
  }

  export type TechniqueProficiencyCreateNestedOneWithoutUserInput = {
    create?: XOR<TechniqueProficiencyCreateWithoutUserInput, TechniqueProficiencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechniqueProficiencyCreateOrConnectWithoutUserInput
    connect?: TechniqueProficiencyWhereUniqueInput
  }

  export type MatchHistroyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchHistroyCreateWithoutUserInput, MatchHistroyUncheckedCreateWithoutUserInput> | MatchHistroyCreateWithoutUserInput[] | MatchHistroyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchHistroyCreateOrConnectWithoutUserInput | MatchHistroyCreateOrConnectWithoutUserInput[]
    createMany?: MatchHistroyCreateManyUserInputEnvelope
    connect?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
  }

  export type TechniqueProficiencyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TechniqueProficiencyCreateWithoutUserInput, TechniqueProficiencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechniqueProficiencyCreateOrConnectWithoutUserInput
    connect?: TechniqueProficiencyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatchHistroyUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchHistroyCreateWithoutUserInput, MatchHistroyUncheckedCreateWithoutUserInput> | MatchHistroyCreateWithoutUserInput[] | MatchHistroyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchHistroyCreateOrConnectWithoutUserInput | MatchHistroyCreateOrConnectWithoutUserInput[]
    upsert?: MatchHistroyUpsertWithWhereUniqueWithoutUserInput | MatchHistroyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchHistroyCreateManyUserInputEnvelope
    set?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    disconnect?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    delete?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    connect?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    update?: MatchHistroyUpdateWithWhereUniqueWithoutUserInput | MatchHistroyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchHistroyUpdateManyWithWhereWithoutUserInput | MatchHistroyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchHistroyScalarWhereInput | MatchHistroyScalarWhereInput[]
  }

  export type TechniqueProficiencyUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechniqueProficiencyCreateWithoutUserInput, TechniqueProficiencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechniqueProficiencyCreateOrConnectWithoutUserInput
    upsert?: TechniqueProficiencyUpsertWithoutUserInput
    disconnect?: TechniqueProficiencyWhereInput | boolean
    delete?: TechniqueProficiencyWhereInput | boolean
    connect?: TechniqueProficiencyWhereUniqueInput
    update?: XOR<XOR<TechniqueProficiencyUpdateToOneWithWhereWithoutUserInput, TechniqueProficiencyUpdateWithoutUserInput>, TechniqueProficiencyUncheckedUpdateWithoutUserInput>
  }

  export type MatchHistroyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchHistroyCreateWithoutUserInput, MatchHistroyUncheckedCreateWithoutUserInput> | MatchHistroyCreateWithoutUserInput[] | MatchHistroyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchHistroyCreateOrConnectWithoutUserInput | MatchHistroyCreateOrConnectWithoutUserInput[]
    upsert?: MatchHistroyUpsertWithWhereUniqueWithoutUserInput | MatchHistroyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchHistroyCreateManyUserInputEnvelope
    set?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    disconnect?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    delete?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    connect?: MatchHistroyWhereUniqueInput | MatchHistroyWhereUniqueInput[]
    update?: MatchHistroyUpdateWithWhereUniqueWithoutUserInput | MatchHistroyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchHistroyUpdateManyWithWhereWithoutUserInput | MatchHistroyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchHistroyScalarWhereInput | MatchHistroyScalarWhereInput[]
  }

  export type TechniqueProficiencyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechniqueProficiencyCreateWithoutUserInput, TechniqueProficiencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechniqueProficiencyCreateOrConnectWithoutUserInput
    upsert?: TechniqueProficiencyUpsertWithoutUserInput
    disconnect?: TechniqueProficiencyWhereInput | boolean
    delete?: TechniqueProficiencyWhereInput | boolean
    connect?: TechniqueProficiencyWhereUniqueInput
    update?: XOR<XOR<TechniqueProficiencyUpdateToOneWithWhereWithoutUserInput, TechniqueProficiencyUpdateWithoutUserInput>, TechniqueProficiencyUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserCreateNestedOneWithoutTechiquesInput = {
    create?: XOR<UserCreateWithoutTechiquesInput, UserUncheckedCreateWithoutTechiquesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechiquesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTechiquesNestedInput = {
    create?: XOR<UserCreateWithoutTechiquesInput, UserUncheckedCreateWithoutTechiquesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechiquesInput
    upsert?: UserUpsertWithoutTechiquesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTechiquesInput, UserUpdateWithoutTechiquesInput>, UserUncheckedUpdateWithoutTechiquesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MatchHistroyCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    score?: number
  }

  export type MatchHistroyUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    score?: number
  }

  export type MatchHistroyCreateOrConnectWithoutUserInput = {
    where: MatchHistroyWhereUniqueInput
    create: XOR<MatchHistroyCreateWithoutUserInput, MatchHistroyUncheckedCreateWithoutUserInput>
  }

  export type MatchHistroyCreateManyUserInputEnvelope = {
    data: MatchHistroyCreateManyUserInput | MatchHistroyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TechniqueProficiencyCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
  }

  export type TechniqueProficiencyUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstCutting?: boolean
    secondCutting?: boolean
    thirdCutting?: boolean
    fourthCutting?: boolean
    fifthCutting?: boolean
    sixthCutting?: boolean
    seventhCutting?: boolean
    firstBlockTechnique?: boolean
    secondBlockTechnique?: boolean
    thirdBlockTechnique?: boolean
    firstSwordStance?: boolean
    secondSwordStance?: boolean
    thirdSwordStance?: boolean
    fourthSwordStance?: boolean
    fifthSwordStance?: boolean
    sixthSwordStance?: boolean
    seventhSwordStance?: boolean
    eigthSwordStance?: boolean
  }

  export type TechniqueProficiencyCreateOrConnectWithoutUserInput = {
    where: TechniqueProficiencyWhereUniqueInput
    create: XOR<TechniqueProficiencyCreateWithoutUserInput, TechniqueProficiencyUncheckedCreateWithoutUserInput>
  }

  export type MatchHistroyUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchHistroyWhereUniqueInput
    update: XOR<MatchHistroyUpdateWithoutUserInput, MatchHistroyUncheckedUpdateWithoutUserInput>
    create: XOR<MatchHistroyCreateWithoutUserInput, MatchHistroyUncheckedCreateWithoutUserInput>
  }

  export type MatchHistroyUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchHistroyWhereUniqueInput
    data: XOR<MatchHistroyUpdateWithoutUserInput, MatchHistroyUncheckedUpdateWithoutUserInput>
  }

  export type MatchHistroyUpdateManyWithWhereWithoutUserInput = {
    where: MatchHistroyScalarWhereInput
    data: XOR<MatchHistroyUpdateManyMutationInput, MatchHistroyUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchHistroyScalarWhereInput = {
    AND?: MatchHistroyScalarWhereInput | MatchHistroyScalarWhereInput[]
    OR?: MatchHistroyScalarWhereInput[]
    NOT?: MatchHistroyScalarWhereInput | MatchHistroyScalarWhereInput[]
    id?: StringFilter<"MatchHistroy"> | string
    createdAt?: DateTimeFilter<"MatchHistroy"> | Date | string
    userId?: StringFilter<"MatchHistroy"> | string
    score?: IntFilter<"MatchHistroy"> | number
  }

  export type TechniqueProficiencyUpsertWithoutUserInput = {
    update: XOR<TechniqueProficiencyUpdateWithoutUserInput, TechniqueProficiencyUncheckedUpdateWithoutUserInput>
    create: XOR<TechniqueProficiencyCreateWithoutUserInput, TechniqueProficiencyUncheckedCreateWithoutUserInput>
    where?: TechniqueProficiencyWhereInput
  }

  export type TechniqueProficiencyUpdateToOneWithWhereWithoutUserInput = {
    where?: TechniqueProficiencyWhereInput
    data: XOR<TechniqueProficiencyUpdateWithoutUserInput, TechniqueProficiencyUncheckedUpdateWithoutUserInput>
  }

  export type TechniqueProficiencyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstCutting?: BoolFieldUpdateOperationsInput | boolean
    secondCutting?: BoolFieldUpdateOperationsInput | boolean
    thirdCutting?: BoolFieldUpdateOperationsInput | boolean
    fourthCutting?: BoolFieldUpdateOperationsInput | boolean
    fifthCutting?: BoolFieldUpdateOperationsInput | boolean
    sixthCutting?: BoolFieldUpdateOperationsInput | boolean
    seventhCutting?: BoolFieldUpdateOperationsInput | boolean
    firstBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    secondBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    thirdBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    firstSwordStance?: BoolFieldUpdateOperationsInput | boolean
    secondSwordStance?: BoolFieldUpdateOperationsInput | boolean
    thirdSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fourthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fifthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    sixthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    seventhSwordStance?: BoolFieldUpdateOperationsInput | boolean
    eigthSwordStance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TechniqueProficiencyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstCutting?: BoolFieldUpdateOperationsInput | boolean
    secondCutting?: BoolFieldUpdateOperationsInput | boolean
    thirdCutting?: BoolFieldUpdateOperationsInput | boolean
    fourthCutting?: BoolFieldUpdateOperationsInput | boolean
    fifthCutting?: BoolFieldUpdateOperationsInput | boolean
    sixthCutting?: BoolFieldUpdateOperationsInput | boolean
    seventhCutting?: BoolFieldUpdateOperationsInput | boolean
    firstBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    secondBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    thirdBlockTechnique?: BoolFieldUpdateOperationsInput | boolean
    firstSwordStance?: BoolFieldUpdateOperationsInput | boolean
    secondSwordStance?: BoolFieldUpdateOperationsInput | boolean
    thirdSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fourthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    fifthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    sixthSwordStance?: BoolFieldUpdateOperationsInput | boolean
    seventhSwordStance?: BoolFieldUpdateOperationsInput | boolean
    eigthSwordStance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    techiques?: TechniqueProficiencyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    techiques?: TechniqueProficiencyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    techiques?: TechniqueProficiencyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    techiques?: TechniqueProficiencyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTechiquesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    matches?: MatchHistroyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTechiquesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
    email: string
    matches?: MatchHistroyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTechiquesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechiquesInput, UserUncheckedCreateWithoutTechiquesInput>
  }

  export type UserUpsertWithoutTechiquesInput = {
    update: XOR<UserUpdateWithoutTechiquesInput, UserUncheckedUpdateWithoutTechiquesInput>
    create: XOR<UserCreateWithoutTechiquesInput, UserUncheckedCreateWithoutTechiquesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTechiquesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTechiquesInput, UserUncheckedUpdateWithoutTechiquesInput>
  }

  export type UserUpdateWithoutTechiquesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matches?: MatchHistroyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTechiquesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matches?: MatchHistroyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MatchHistroyCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    score?: number
  }

  export type MatchHistroyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type MatchHistroyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type MatchHistroyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchHistroyDefaultArgs instead
     */
    export type MatchHistroyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchHistroyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechniqueProficiencyDefaultArgs instead
     */
    export type TechniqueProficiencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechniqueProficiencyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}