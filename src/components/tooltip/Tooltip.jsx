import React from 'react';
import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

export const Tooltip = ({ children, title, placement = 'bottom' }) => {
    return (
        <OverlayTrigger
            placement={placement}
            overlay={<BootstrapTooltip>{title}</BootstrapTooltip>}
        >
            {children} {/* Ensure that only one child is passed */}
        </OverlayTrigger>
    );
};
