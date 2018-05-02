/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IFrameObject {
  close();
  resize();
}

interface IFrameResizerComponent {
  iFrameResizer: IFrameObject
}

declare const resizer: {
  iframeResizer();
};

/* Modules */
declare module 'iframe-resizer' {
  export = resizer;
}
