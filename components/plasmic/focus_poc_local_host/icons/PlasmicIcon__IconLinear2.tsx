// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLinear2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLinear2Icon(props: IconLinear2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 10.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm-.396 2.245c.131.158.263.311.396.457.133-.146.265-.298.396-.457a18.67 18.67 0 01-.792 0zm-1.496-.093A15.483 15.483 0 015.394 12a8.157 8.157 0 00-.128.762c-.142 1.187.057 1.909.359 2.082.302.175 1.026-.014 1.984-.73.197-.148.396-.312.595-.491-.39-.428-.756-.878-1.096-1.347zM12.606 12c-.538.12-1.112.213-1.714.276a15.5 15.5 0 01-1.096 1.347c.2.18.398.343.595.491.958.716 1.682.905 1.984.73.302-.174.5-.895.36-2.082a8.542 8.542 0 00-.128-.762h-.001zm1.088-.29c.432 1.979.205 3.554-.757 4.11-.961.554-2.44-.037-3.937-1.4-1.498 1.364-2.976 1.954-3.938 1.399-.961-.555-1.188-2.13-.756-4.11-1.93-.615-3.181-1.6-3.181-2.71 0-1.11 1.25-2.095 3.18-2.71-.431-1.98-.204-3.555.758-4.11.961-.556 2.44.035 3.937 1.4 1.498-1.365 2.976-1.955 3.938-1.4.961.555 1.188 2.13.756 4.11 1.93.614 3.181 1.6 3.181 2.71 0 1.11-1.25 2.095-3.18 2.71h-.002zm-5.49-7.335a8.518 8.518 0 00-.595-.491c-.958-.716-1.682-.905-1.984-.73-.302.174-.5.895-.36 2.082.03.245.073.5.128.762a15.51 15.51 0 011.715-.276c.356-.49.724-.94 1.096-1.347zm2.688 1.347a15.35 15.35 0 011.714.276c.056-.262.099-.517.127-.762.143-1.187-.056-1.909-.358-2.083-.302-.174-1.026.015-1.984.731a8.526 8.526 0 00-.595.491c.373.407.74.857 1.096 1.347zM9.396 5.63A13.01 13.01 0 009 5.173a12.16 12.16 0 00-.396.457c.264-.006.528-.006.792 0zm-3.117 5.398a18.668 18.668 0 01-.396-.686c-.071.193-.137.383-.197.571.192.042.39.08.592.115h.001zm1.449.175c.847.063 1.697.063 2.544 0A17.09 17.09 0 0011.544 9a17.17 17.17 0 00-1.272-2.204 17.172 17.172 0 00-2.544 0A17.173 17.173 0 006.456 9a17.17 17.17 0 001.272 2.204zm4.389-3.545a13.2 13.2 0 00.197-.571 13.156 13.156 0 00-.592-.115c.136.226.268.454.395.685zm-7.52-.28a8.266 8.266 0 00-.723.27C2.776 8.118 2.25 8.65 2.25 9c0 .349.525.881 1.624 1.352.227.098.469.188.724.27.166-.525.372-1.07.618-1.622a15.508 15.508 0 01-.619-1.622zm1.088-.291c.06.187.127.378.198.57.127-.231.26-.46.396-.685-.202.034-.4.073-.593.115h-.001zm7.718 3.535c.255-.082.496-.172.723-.27C15.224 9.882 15.75 9.35 15.75 9c0-.349-.525-.881-1.624-1.352a8.512 8.512 0 00-.723-.27c-.167.525-.373 1.07-.62 1.622.247.553.453 1.097.62 1.622zm-1.088.291a13.87 13.87 0 00-.198-.57c-.127.231-.26.46-.396.685.203-.035.4-.073.593-.115h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLinear2Icon;
/* prettier-ignore-end */