export class ResourceNotFoundException implements Error {

  name: string;
  message: string;
  stack?: string | undefined;

  constructor(message?: string, name?: string) {
    this.name = name || "404"
    this.message = message || "Resource not found"
  }

}