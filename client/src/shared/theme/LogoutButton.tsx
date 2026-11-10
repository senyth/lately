import { IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLogout } from '../../hooks/useLogout';

export default function LogoutButton() {
  const logout = useLogout();

  return (
    <Tooltip title="Log out">
      <span>
        <IconButton
          onClick={() => logout.mutate()}
          disabled={logout.isPending}
          aria-label="Log out"
          sx={{ color: 'primary.contrastText' }}
        >
          <LogoutIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
}
