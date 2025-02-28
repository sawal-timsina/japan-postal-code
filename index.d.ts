declare namespace JapanPostalCode {
  interface AddressData {
    prefecture: string;
    city: string;
    area: string;
    street: string;
  }
}

declare function get(zip_code: string): Promise<JapanPostalCode.AddressData | undefined>;

declare const JapanPostalCode: {
  get: typeof get;
};
export = JapanPostalCode;
