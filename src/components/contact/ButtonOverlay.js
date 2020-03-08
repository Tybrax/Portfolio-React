import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Button } from '../styledComponent/Styled.js';

const submitMessage = (
  <Popover id="popover-basic">
    <Popover.Title>
        <h3 className="text-center">Form submitted</h3>
    </Popover.Title>
  </Popover>
);

export const ButtonOverlay = (props) => {
    return (
        <OverlayTrigger variant="dark" trigger="click" placement="bottom" overlay={submitMessage}>
            <Button className= "mx-auto d-block">Submit</Button>
        </OverlayTrigger>
    )
};
