'use client';
//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Mui
import { Button, ButtonProps, styled, Typography } from '@mui/material';
//_______________________________________________________________

//@Utils
import { truncateString } from '@/utils/methods';
//_______________________________________________________________

//@Assets
import SvgDocumentUpload from 'ideep-design-system-2/icons/DocumentUpload';
import SvgTrash from 'ideep-design-system-2/icons/Trash';
//_______________________________________________________________

interface UploaderButtonProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  onDelete: () => void;
}

export function UploaderButton({
  onFileChange,
  file,
  onDelete,
}: UploaderButtonProps) {
  return (
    <Label>
      <UploadButton
        variant="text"
        component="span"
        fullWidth
        onClick={(e) => {
          if (file) {
            e.stopPropagation();
            onDelete();
          }
        }}
        sx={
          file
            ? {
                borderStyle: 'solid',
                borderColor: 'primary.main',
                justifyContent: 'space-between',
              }
            : {}
        }
      >
        {file ? (
          <>
            <Typography variant="caption1.bold">
              {truncateString(file.name, 38)}
            </Typography>
            <SvgTrash primarycolor="inherit" />
          </>
        ) : (
          <>
            <SvgDocumentUpload primarycolor="inherit" />
            <Typography variant="caption1.bold">
              بارگذاری رزومه شخصی‌
            </Typography>
          </>
        )}
      </UploadButton>
      {!file && (
        <HiddenFileInput
          type="file"
          accept=".pdf,.doc,.docx,.txt,.cv,.png,.jpeg,.jpg,.gif,.webp"
          onChange={onFileChange}
        />
      )}
    </Label>
  );
}

const Label = styled('label')({
  display: 'block',
});

const UploadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  border: `1px dashed ${theme.palette.grey[2]}`,
  borderWidth: 2,
  margin: '0 auto',
  stroke: theme.palette.primary.main,
  display: 'flex',
  gap: 12,
  minHeight: 51,
}));

const HiddenFileInput = styled('input')({
  display: 'none',
});
