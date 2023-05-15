export interface AppBundle {
  version: "v1alpha";
  server?: ServerConfig;
}

interface ServerConfig {
  start: StartConfig;
  concurrency?: number;
  cpu?: number;
  memory?: "256MiB" | "512MiB" | "1GiB" | "2GiB" | "4GiB" | "8GiB" | "16GiB" | string;
  timeoutSeconds?: number;
  minInstances?: number;
  maxInstances?: number;
}

interface StartConfig {
  // Path to local source directory. Defaults to .bundle/server.
  dir?: string;
  // Command to start the server (e.g. ["npm", "run", "start"]).
  cmd: string[];
  // Runtime required to command execution.
  runtime: "nodejs18" | string;
}

export interface AppSpec {
  baseImage: string;
  packageManagerInstallCommand?: string;
  environmentVariables?: Record<string, string>;
  installCommand: string;
  buildCommand: string;
  startCommand: string;
}

export class Driver {
  constructor(readonly spec: AppSpec) {}

  install(): void {
    throw new Error("install() not implemented");
  }

  build(): void {
    throw new Error("build() not implemented");
  }
}
