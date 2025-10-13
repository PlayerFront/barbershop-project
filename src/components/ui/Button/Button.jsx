import './_button.scss';

const Button = ({
    children,
    variant = 'accent',
    size = 'large',
    href,
    onClick,
    type = 'button',
    external = 'false',
    ...props
}) => {
    const className = `button button--${variant} button--${size}`;

    const linkProps = external ? {
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {};

    if (href) {
        return (
            <a 
                className={className} 
                href={href}
                {...linkProps}
                {...props} 
            >
                {children}
            </a>
        );
    }

    return (
        <button className={className} type={type} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;