export type MiddleWare<T, Env = void> = {
  priority?: number;
  (value: T, env?: Env): T;
};

export default class Pipeline<T, Env = any> {
  private _middleWares: MiddleWare<T, Env>[];

  public env?: Env;

  constructor(env?: Env) {
    this._middleWares = [];
    if (typeof env === 'undefined') {
      this.env = env;
    }
  }

  use(...mws: MiddleWare<T, Env>[]): Pipeline<T, Env> {
    this._middleWares.push(...mws);
    this._middleWares.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
    return this;
  }

  remove(...mws: MiddleWare<T, Env>[]) {
    this._middleWares = this._middleWares.filter((mw) => !mws.includes(mw));
    return this;
  }

  get(value: T): T {
    return this._middleWares.reduce(
      (current: T, mw: MiddleWare<T, Env>) => mw(current, this.env),
      value,
    );
  }
}
